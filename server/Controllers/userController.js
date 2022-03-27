const express = require("express")

const router = express.Router()
const User = require("../Models/userModel")


router.get("/", async (req, res) => {
    try {
        const users = await User.find().lean().exec()
        res.status(200).json(users)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec()
        res.status(200).json(user)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.post("/signup/", async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(user)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(201).send("successfully deleted")
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})





module.exports = router