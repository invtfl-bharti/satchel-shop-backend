const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require('../utils/generateToken');
const { registerUser } = require("../controllers/authController");

router.get("/", function (req, res) {
  res.send("It's working");
  
});

router.post("/register", registerUser);


module.exports = router;
