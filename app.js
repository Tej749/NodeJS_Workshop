//const app = require('express')()
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is get msg...!");
});

app.get("/about", (req, res) => {
  res.send("This is about Page...");
});

app.listen(3000, () => {
  console.log("Project has been started..");
});
