const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const DB = process.env.DATABASEURL;

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});