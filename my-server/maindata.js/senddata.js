const fs = require("fs");
const User = require("../models/user-model");

const data = JSON.parse(fs.readFileSync("./user-data.json"));

exports.store = async (req, res, next) => {
  try {
    const senddata = await User.create(data);
    res.send(senddata);
  } catch (error) {
    res.send("Data Exist");
    console.log("The data was already Exist");
    return error;
  }
  next();
  // senddata
  //   .then((senddata) => {
  //     res.json({
  //       status: "success",
  //       message: "signup successfull",
  //       data: result,
  //     });
  //   })
  //   .catch((err) => {
  //     res.json({
  //       status: "failed",
  //       message: "not  while hassing user",
  //     });
  //   });
};
