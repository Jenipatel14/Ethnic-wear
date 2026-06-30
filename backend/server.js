const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/femmora");

app.use("/api/products", require("./routes/products"));

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});