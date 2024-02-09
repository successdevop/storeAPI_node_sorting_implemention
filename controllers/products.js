const ProductSchema = require("../model/productModel");
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllProductsTest = asyncWrapper(async (req, res) => {
  const products = await ProductSchema.find({});
  res.status(201).json({ status: "success", products });
});

const getAllProducts = asyncWrapper(async (req, res) => {
  const {} = req.query;
  const queryObject = {};
  const products = await ProductSchema.find(queryObject);
  res.status(201).json({ status: "success", products });
});

module.exports = { getAllProductsTest, getAllProducts };
