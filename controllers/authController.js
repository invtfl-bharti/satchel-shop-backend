const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
const flash = require("connect-flash");

module.exports.registerUser = async function (req, res) {
  try {
    let { email, fullName, password } = req.body;
    let user = await userModel.findOne({ email: email });
    if (user) return res.status(401).send("You already have an account, please login"); 
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          return res.send(err.message);
        } else {
          let user = await userModel.create({
            email,
            password: hash,
            fullName,
          });

          let token = generateToken(user);
          res.cookie("token", token);
          res.send("User created successfully");
        }
      });
    });
  } catch (err) {
    res.send(err.message);
  }
};




module.exports.loginUser = async function (req, res) {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email: email });
  if (!user) return res.send("Email or Password Incorrect");

  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      let token = generateToken(user);
      res.cookie("token", token);
      res.send("You can login");
    }
    else {
      res.send("Email or password incorrect");
    }
  });
};

module.exports.logout = async function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
};
