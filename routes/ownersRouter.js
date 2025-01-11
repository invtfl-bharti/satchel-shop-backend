const express = require("express");
const ownersModel = require("../models/owners-model");
const router = express.Router();

// Debug environment
// console.log("Current Environment:", process.env.NODE_ENV);

// GET route for "/"
// router.get("/", function (req, res) {
//   res.send("It's working");
// });

// POST route for "/create", only in development
if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownersModel.find();
      if (owners.length > 0) {
          return res.status(504).send("You don't have permission to create");
      }

      let { fullName, email, password } = req.body;
      let createOwner = await ownersModel.create({
          fullName,
          email,
          password,
      });
       res.status(201).send(createOwner);
  });
}


router.get("/admin", function (req, res) {
  let success = req.flash("success");
  res.render("createproducts",{success})
})

module.exports = router;
