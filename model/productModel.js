const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  name: {
    type: String,
    required: [true, "product name must be provided"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },
  company: {
    type: String,
    enum: {
      values: ["Dangote", "Globacoms", "Jesict", "Sheraton", "Innoson"],
      message: `{VALUE} is not supported`,
    },
  },
  rating: {
    type: Number,
    default: 4.5,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
