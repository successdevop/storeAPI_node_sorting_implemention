const ProductSchema = require("../model/productModel");
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllProductsTest = asyncWrapper(async (req, res) => {
  const products = await ProductSchema.find({}).sort("price");
  res
    .status(200)
    .json({ status: "success", products, nbHits: products.length });
});

const getAllProducts = asyncWrapper(async (req, res) => {
  const { featured, name, company, sort, fields } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (company) {
    queryObject.company = company;
  }

  console.log(queryObject);
  let result = ProductSchema.find(queryObject);

  if (sort) {
    let sortedItem = sort.split(",").join(" ");
    result = result.sort(sortedItem);
  }

  if (fields) {
    let fieldsItems = fields.split(",").join(" ");
    result = result.select(fieldsItems);
  }

  const page = Number(req.query.page) || 1;
  const limits = Number(req.query.limits) || 10;
  const skips = (page - 1) * limits;

  result = result.skip(skips).limit(limits);

  const products = await result;
  res
    .status(200)
    .json({ status: "success", products, nbHits: products.length });
});

module.exports = { getAllProductsTest, getAllProducts };
