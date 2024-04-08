const mongoose = require("mongoose");

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create and export the User model
module.exports = mongoose.model("User", userSchema);
