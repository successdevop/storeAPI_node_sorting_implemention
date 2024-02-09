const express = require("express");
const app = express();
require("dotenv").config();

const database = require("./database/storeDB");
const storeRouter = require("./routes/products");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/generalCustomError");

// parse json data
app.use(express.json());
// app listening routes
app.use("/api/v1/products", storeRouter);
// app route not found
app.use(notFound);
// general Error Handler
app.use(errorHandler);

// app listening port
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // database
    await database(process.env.MONGO_URL);
    app.listen(
      port,
      console.log("Server is listening on port : " + port + "...")
    );
  } catch (error) {
    console.log(error);
  }
};
start();
