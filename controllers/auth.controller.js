import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import  createError  from "../utils/error.js";
import jwt from "jsonwebtoken";
import * as  dotenv  from 'dotenv';



export const register = async (req, res, next) => {
    console.log(req.body);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({...req.body,password: hash,});
    try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message});     
}
  }

  export const login = async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.body.username });
  
      if (!user) return next(createError(404, "User not found!"));
  
      const isCorrect = bcrypt.compareSync(req.body.password, user.password);
      if (!isCorrect)
        return next(createError(400, "Wrong password or username!"));
  
      const token = jwt.sign(
        {
          id: user._id,
          isSeller: user.isSeller,
        },
        process.env.JWT_Key
      );
  
      const { password, ...info } = user._doc;
      res
        .cookie("accessToken", token, {
          httpOnly: true,
        })
        .status(200)
        .send({...info,token});
    } catch (err) {
      next(err);
    }
  };

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};