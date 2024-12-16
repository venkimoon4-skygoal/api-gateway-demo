const express = require("express");
const db = require("./db");
const cors = require("cors");
const UsersRouters = require("./routes/users.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v4/users", UsersRouters);

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
