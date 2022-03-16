const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const collection = require("../maindata.js/senddata");
const logincontroller = require("../controller/logincontroller");

router.post("/send", collection.store);
router.post("/login", logincontroller.login);

module.exports = router;
