const express = require("express");
const app = express();
const path = require("path");

//setting view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/random", (req, res) => {
  let num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num });
});

app.get("/courses", (req, res) => {
  let courses = ["OOP", "Web", "DS", "Database"];
  res.render("courses", { courses });
});
app.listen(3000, () => {
  console.log(`Server Listening at PORT 3000`);
});
