const dt = require("./config/db");
const express = require("express");
// const fs = require("fs");
const app = express();
const UserRouter = require("./routers/router");
const cors = require("cors");
// const User = require("./models/user-model");
// const UserRouter = require("./routers/router");

// const UserRouter = require("./api/user");

const bodyparser = require("express").json;
app.use(bodyparser());
app.use(cors({ origin: true }));

app.use("/user", UserRouter);

const port = 3001;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
