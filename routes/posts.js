const express = require("express");

const router = express.Router();

// Create Routes
router.get("/", (req, res) => {
  res.send({
    message: "We are on posts",
  });
});

// Export to router
module.exports = router;
