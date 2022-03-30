const express = require("express");

const router = express.Router();
const User = require("../Models/userModel");

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.post("/signin/", async (req, res) => {
  try {
    let criteria;
    if (req.body.number) criteria = { number: req.body.number };
    if (!req.body.email)
      criteria = { ...criteria, email: `user${req.body.number}@gmail.com` };
    // check if email or number is already in use
    let user = await User.exists(criteria);
    // if exists, send a 404
    if (user) {
      return res.status(200).json({ otp: "Enter last four digit of number" });
    }
    // else create a user
    user = await User.create(criteria);
    res.status(200).json({ otp: "Enter last four digit of number" });
  } catch (err) {
    return res.status(500).json({ status: "failed", message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(201).send("successfully deleted");
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
