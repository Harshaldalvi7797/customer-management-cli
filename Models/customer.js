const mongoose = require("mongoose");

//Customer Schema

const customerSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone_no: { type: String }
});

//Define and export
module.exports = mongoose.model("customer", customerSchema);


