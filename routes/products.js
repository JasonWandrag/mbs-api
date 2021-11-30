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
});

// Export to router
module.exports = router;
