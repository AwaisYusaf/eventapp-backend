import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new mongoose.Schema({
  title: String,
  content: String,
  rating: Number
});

// Define the model for your reviews
export default mongoose.model('Review', reviewSchema);


