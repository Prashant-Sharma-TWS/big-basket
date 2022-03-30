const router = require("express").Router();
const Product = require("../Models/productModel");

router.post("/", async (req, res) => {
  try {
    const { searchTerm } = req.body;
    const products = await Product.find();

    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    res.status(200).json({ results });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
