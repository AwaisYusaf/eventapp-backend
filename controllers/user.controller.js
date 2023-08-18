// import User from "../models/user.model.js";
// import createError from "../utils/error.js";

const User = require("../models/user.model.js");
const createError = require("../utils/error.js");

const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account!"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted.");
};
const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};

const getAllUsers = async (req, res, next) => {
  try {
    console.log("get all users");

    const allUsers = await User.find({});

    res.json(allUsers);
    res.send({ data: allUsers });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { deleteUser, getUser, getAllUsers };
