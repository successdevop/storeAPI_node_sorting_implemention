require("dotenv").config();

const database = require("./database/storeDB");
const Product = require("./model/productModel");
const jsonProduct = require("./products.json");

const start = async () => {
  try {
    await database(process.env.MONGO_URL);
    await Product.deleteMany();
    await Product.create(jsonProduct);
    console.log("Successful!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
