const mongoose = require("mongoose");
mongoose.set("strict", true);
const DB = "mongodb://127.0.0.1:27017/db";

mongoose.connect(DB, () => {
  console.log("connected DB");
});
