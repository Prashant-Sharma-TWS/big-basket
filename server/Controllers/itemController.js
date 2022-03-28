const express = require("express")

const router = express.Router()
const Item = require("../Models/itemModel")


router.get("/", async (req, res) => {
    var q = {}
    if (req.query.cart) {
        q["cart"] = req.query.cart
    }
    try {
        const items = await Item.find(q).populate("product").lean().exec()
        res.status(200).json(items)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const item = await Item.findById(req.params.id).lean().exec()
        res.status(200).json(item)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.post("/", async (req, res) => {
    try {
        const item = await Item.create(req.body)
        res.status(201).json(item)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(item)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        res.status(201).send("successfully deleted")
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})





module.exports = router