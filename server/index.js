const express = require("express");
require("dotenv").config();
require("./db/config");
const cors = require("cors");
const User = require("./db/User");
const Product = require("./db/Product");
const app = express();
app.use(express.json());
app.use(cors());
// route for register a user
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const emailFound = await User.findOne({ email: email });
  if (emailFound) {
    console.log("User already register");
    return res
      .status(400)
      .send({ success: false, message: "User already register" });
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  return res
    .status(200)
    .send({ success: true, message: "User Login Successfully", user });
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      return res
        .status(200)
        .send({ success: true, message: "User login Successfully", user });
    } else {
      return res.status(400).send({ success: false, message: "No user found" });
    }
  }
  return res
    .status(400)
    .send({ success: false, message: "Invalid credentials" });
});

app.post("/add-product", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});

app.get("/products", async (req, res) => {
  let products = await Product.find();
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send({ result: "No products found" });
  }
});

app.delete("/product/:id", async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});

app.get("/product/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No record found" });
  }
});

app.put("/product/:id", async (req, res) => {
  let result = await Product.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: req.body,
    }
  );
  res.send(result);
});

app.get("/search/:key", async (req, res) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server working");
});
