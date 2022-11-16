const express = require("express");
const app = express();
const path = require("path");

//setting public directory of our static assets
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));

//setting view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  const title = "Home";
  res.render("home", { title });
});

app.get("/about", (req, res) => {
  const title = "About";
  res.render("about", { title });
});

app.listen(3000, () => {
  console.log(`Server Listening at PORT 3000`);
});
