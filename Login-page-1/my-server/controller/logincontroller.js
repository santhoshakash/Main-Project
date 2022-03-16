const User = require("../models/user-model");
const bcrypt = require("bcrypt");

exports.login = async (req, res, next) => {
  console.log("hi");
  try {
    const { email, password } = req.body;

    //   if (email == "" || password == "") {
    //     res.json({
    //       status: "failed",
    //       message: "Empty credintals",
    //     });
    const data = await User.findOne({ email });
    console.log(data);
    if (!data) throw new Error("unauthorised user");
    if (data) {
      const hashedpassword = data.password;
      const valid = await bcrypt.compare(password, hashedpassword);
      console.log(valid);

      if (valid) {
        console.log(valid, data);
        return res.status(200).send(data);
      } else {
        // console.log("wrong password");
        return res.send({
          status: 400,
          message: "Invalid password",
        });
      }
    }
  } catch (err) {
    // console.log("error");
    return res.send(err.message);
  }
  //   next();
  //   res.send("hi");
};
