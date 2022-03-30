require("dotenv").config();

const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");

// controllers require
const userController = require("./Controllers/userController");
const productController = require("./Controllers/productController");
const itemController = require("./Controllers/itemController");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userController);
app.use("/cl", productController);
app.use("/items", itemController);

app.listen(process.env.BACKEND_PORT, async () => {
  try {
    await connect();
    console.log("server is running on port: ", process.env.BACKEND_PORT);
  } catch (e) {
    console.log("connection error: ", e.message);
  }
});
