const express = require("express");
const app = express();

// Middleware
app.use();

// ROUTES
app.get("/", (req, res) => {
  res.send({
    message: "Welcome",
  });
});

// Start listening to server
app.listen(3000);
