const dt = require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MANGODB_URI, {
    UseNewUrlParser: true,
    UseUnifiedTopology: true,
  })
  .then(() => {
    console.log("====================================");
    console.log("DB Connected");
    console.log("====================================");
  })
  .catch((err) => console.log("Error: " + err));
