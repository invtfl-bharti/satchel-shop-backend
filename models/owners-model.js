const mongoose = require("mongoose");


const ownerSchema = mongoose.Schema({
  fullName: String,
  email: String,
    password: String,
    products: {
        type: Array,
        default:[]
    },
    gstin: String,
  contact: Number,
  picture: String,
});

module.exports = mongoose.model("owner", ownerSchema);
