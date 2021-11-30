const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

// Import Routes
const postRoutes = require("./routes/posts");

// Middleware
app.use("/posts", postRoutes);

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
