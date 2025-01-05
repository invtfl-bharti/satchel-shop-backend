const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config");
mongoose
  .connect(`${config.get("MONGODB_URI")}/satchelshop`)
  .then(function () {
    //   nothing is printed
    dbgr("connected");
  })
  .catch(function (err) {
    dbgr(err);
  });

// control to database
module.exports = mongoose.connection;
