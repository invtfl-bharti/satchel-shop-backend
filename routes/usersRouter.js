const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require('../utils/generateToken');
const { registerUser } = require("../controllers/authController");
const { loginUser } = require('../controllers/authController');
const isLoggedIn = require('../middlewares/isLoggedIn')
const { logout } = require('../controllers/authController');



router.get("/", function (req, res) {
  res.render("index");

});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logout);


module.exports = router;
