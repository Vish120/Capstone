// import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const Member = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Member", Member);
