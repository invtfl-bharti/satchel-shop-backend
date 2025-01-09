const express = require('express'); 
const app = express();
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");

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

router.get("/shop", isLoggedIn, function (req, res) {
    res.render("shop");
})

module.exports = router;