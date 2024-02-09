const express = require("express");
const {
  getAllProducts,
  getAllProductsTest,
} = require("../controllers/products");
const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/test").get(getAllProductsTest);
module.exports = router;
