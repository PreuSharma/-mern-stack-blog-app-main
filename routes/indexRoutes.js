const express = require("express");

const router = express.Router();

// Welcome route
router.get("/", (req, res) => {
  res.send("Welcome to the MERN Stack Blog App!");
});

module.exports = router;
