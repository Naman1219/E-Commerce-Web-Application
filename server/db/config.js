const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const DB = process.env.DATABASEURL;

// const DB = "mongodb://localhost:27017/e-commerce"

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});