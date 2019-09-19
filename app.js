const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT , POST, PATCH, DELETE, GET"
    );
    return res.status(200).json({});
  }
  next();
});

app.use((req, res, next) => {
  res.status(200).json({ message: "test" });
});

module.exports = app;
