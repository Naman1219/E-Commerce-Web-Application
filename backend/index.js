// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const connectDB = async () => {
//   mongoose.set('strictQuery', false);
//   mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
//   const productSchema = new mongoose.Schema({});
//   const product = mongoose.model('product', productSchema);
//   const data = await product.find();
//   console.log(data);
// }

// connectDB();




const express = require('express');
require('./db/config');
const cors = require('cors');
// const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);
const User = require('./db/User');
const app = express();
//this express.json function is used to control what we are getting through api
app.use(express.json());
app.use(cors());
//it is a function,

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  // res.send("api in progress");
  res.send(result);
})
// const connectDB = async () => {
//   mongoose.set("strictQuery", false);
//   mongoose.connect("mongodb://127.0.0.1:27017/e-comm", { useNewUrlParser: true });
//   // mongoose.connect('mongodb://localhost:27017/e-comm');
//   // We need to define schemas when performing : INSERT, UPDATE OR DELETE, not when READING (i.e get data) :))
//   const productSchema = new mongoose.Schema({});
//   // it takes first parameter : collection name and second : schema name.
//   const product = mongoose.model('products', productSchema);
//   //data base se data nikalna is a time taking process sometimes, so using await here to get the promise:
//   const data = await product.find();
//   console.warn(data);
// }

// connectDB();
// app.get("/", (req, res) => {
//   res.send("App is working!")
// });


app.listen(5000);


  // Random Sample :

// const mongoose = require("mongoose");

// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String
// });

// const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     name: "Apple",
//     rating: 7,
//     review: "Taste Good"
// });

// fruit.save();