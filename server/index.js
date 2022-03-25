require("dotenv").config();

const express = require("express");
const connect = require("./configs/db");

const app = express();
app.use(express.json());


app.listen(process.env.BACKEND_PORT, async () => {
  try {
    await connect();
    console.log("server is running on port: ", process.env.BACKEND_PORT);
  } catch (e) {
    console.log("connection error: ", e.message);
  }
});
