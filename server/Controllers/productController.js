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
    var q = { category: req.params.category }
    if (req.query.brand) {
        q["brand"] = req.query.brand
    }
    if (req.query.season) {
        q["season"] = req.query.season
    }
    if (req.query.country) {
        q["country"] = req.query.country
    }

    var sortque = {}
    if (req.query.sort == "priceasc") {
        sortque = { "price": 1 }
    }
    if (req.query.sort == "pricedesc") {
        sortque = { "price": -1 }
    }
    if (req.query.sort == "name") {
        sortque = { "name": 1 }
    }
    if (req.query.sort == "discount") {
        sortque = { "discount": -1 }
    }
    try {
        const products = await Product.find(q).sort(sortque).lean().exec()
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
    var obj = { ...req.body }
    if (req.file !== undefined) {
        obj["photo"] = req.file.path
    }

    try {
        const product = await Product.create(obj)
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