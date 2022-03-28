const express = require("express")

const router = express.Router()
const Product = require("../Models/productModel")
const uploadSingle = require("../Middlewares/upload")


router.get("/", async (req, res) => {
    try {
        const products = await Product.find().lean().exec()
        res.status(200).json(products)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.get("/cl/:category", async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category }).lean().exec()
        res.status(200).json(products)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})



router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean().exec()
        res.status(200).json(product)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.post("/", uploadSingle("photo"), async (req, res) => {
    try {
        const product = await Product.create({ ...req.body, photo: req.file.path })
        res.status(201).json(product)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(product)
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(201).send("successfully deleted")
    }
    catch (err) {
        res.status(400).json(err.message)
    }
})





module.exports = router