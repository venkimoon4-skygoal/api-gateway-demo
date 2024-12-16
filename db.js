const mongoose = require("mongoose");

const mongodburl =
  "mongodb+srv://venkimoon4:Ll9x5iJRnNTlyY8C@api-gateway.fcbih.mongodb.net/";

mongoose.connect(mongodburl);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDb Successfully");
});

db.on("disconnected", () => {
  console.log("MongoDb server disconnected");
});

db.on("error", (error) => {
  console.log("Error in connecting MongoDb server");
});

module.exports = db;
