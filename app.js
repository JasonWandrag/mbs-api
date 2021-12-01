const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("dotenv/config");

app.use(bodyParser.json());

// Import Routes
const postRoutes = require("./routes/posts");
const productRoutes = require("./routes/products");

// Middleware
app.use("/posts", postRoutes);
app.use("/products", productRoutes);

// ROUTES
app.get("/", (req, res) => {
  res.send({
    message: "Welcome",
  });
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to DB!")
);

// Start listening to server
app.listen(3000);
