const express = require("express");
const port = 4000;
const app = express();

// app.use((req, res) => {
//   console.log("Request receieved");
//   console.log(res);
//   res.send("This is first response from your Server");
//   res.send("<h1>This is first response from your Server</h1>");
// });

//Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("*", (req, res) => {
  res.send("I can't recognize the url, you want to hit.");
});

app.listen(port, () => {
  console.log(`Server listening at PORT ${port}`);
});
