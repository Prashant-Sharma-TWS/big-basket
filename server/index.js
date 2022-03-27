require("dotenv").config();

const express = require("express");
const connect = require("./configs/db");
const userController = require("./Controllers/userController")
const productController = require("./Controllers/productController")
const cartController = require("./Controllers/cartController")
const itemController = require("./Controllers/itemController")

const app = express();
app.use(express.json());

app.use("/users", userController)
app.use("/products", productController)
app.use("/carts", cartController)
app.use("/items", itemController)


app.listen(process.env.BACKEND_PORT, async () => {
  try {
    await connect();
    console.log("server is running on port: ", process.env.BACKEND_PORT);
  } catch (e) {
    console.log("connection error: ", e.message);
  }
});
