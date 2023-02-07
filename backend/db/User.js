const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwprd: String
});


module.exports = mongoose.model("users", userSchema);