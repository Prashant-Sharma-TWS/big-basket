const express = require("express")

const router = express.Router()
const Cart = require("../Models/cartModel")


router.get("/", async (req, res) => {
    var q = {}
    if (req.query.userId) {
        q["userId"] = req.query.userId
    }
    if (req.query.active) {
        q["active"] = req.query.active
    }
    try {
        const carts = await Cart.find(q).lean().exec()
        res.status(200).json(carts)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id).lean().exec()
        res.status(200).json(cart)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.post("/", async (req, res) => {
    try {
        const cart = await Cart.create(req.body)
        res.status(201).json(cart)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(cart)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id);
        res.status(201).send("successfully deleted")
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})





module.exports = router