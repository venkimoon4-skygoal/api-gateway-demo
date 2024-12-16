const express = require("express");
const fetchUser = require("../controllers/fetchUsers");

const router = express.Router();

router.get("/fetch-users", fetchUser);

module.exports = router;
