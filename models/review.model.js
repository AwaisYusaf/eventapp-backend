// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new mongoose.Schema({
  title: String,
  content: String,
  rating: Number,
});

// Define the model for your reviews
module.exports = mongoose.model("Review", reviewSchema);
