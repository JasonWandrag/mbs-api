const express = require("express");

const router = express.Router();

const Product = require("../models/Product");

// Create Routes
router.get("/", (req, res) => {
  res.send({
    message: "We are on products",
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const product = new Product({
    id: req.body.id,
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    stock: req.body.stock,
    category: req.body.category,
    SKU: req.body.SKU,
  });

  product
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json({ msg: err }));
});

// Export to router
module.exports = router;
