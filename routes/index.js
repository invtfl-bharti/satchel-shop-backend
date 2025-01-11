const express = require('express'); 
const app = express();
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const {
  registerUser,
  loginUser,
  logout,
} = require("../controllers/authController");

// router.get("/", async (req, res) => {
//   const { email } = req.body;

//   // Check if the user already exists
//   const userExists = await User.findOne({ email });
//   if (userExists) {
//     req.flash("error", "User already exists");
//     return res.redirect("/");
//   }

//   // Register the user
//   const newUser = new User({ ...req.body });
//   await newUser.save();
//   res.redirect("/dashboard");
// });

router.get("/", (req, res) => {
  let error = req.flash("error");
  res.render("index", { error });
});

router.post("/shop", isLoggedIn, function (req, res) {
    res.render("shop");
})


// router.post("/login", loginUser);

module.exports = router;