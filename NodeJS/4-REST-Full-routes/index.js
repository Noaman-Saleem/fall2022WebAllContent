const express = require("express");
const path = require("path");
const app = express();
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const port = 3000;

// override with POST having ?_method=DELETE/PATCH
app.use(methodOverride("_method"));

//Parsing HTML form Body Data
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//setting static assets public directory
app.use(express.static(path.join(__dirname, "/public")));

//Setting view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Fake Database
let blogs = [
  {
    id: uuidv4(),
    title: "Organic Food for health",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image:
      "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuidv4(),
    title: "Better to Eat",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image:
      "https://images.pexels.com/photos/3669640/pexels-photo-3669640.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: uuidv4(),
    title: "Exercise is Best Cure",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image:
      "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: uuidv4(),
    title: "Laxury Cars",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image:
      "https://images.pexels.com/photos/6894427/pexels-photo-6894427.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

app.get("/", (req, res) => {
  // console.log(blogs);
  res.render("home");
});

//Show all blogs
app.get("/blogs", (req, res) => {
  // console.log(blogs);
  res.render("blogs", { blogs });
});

//Render create new blog form
app.get("/blogs/new", (req, res) => {
  res.render("new");
});

//Create a new blog
app.post("/blogs", (req, res) => {
  // console.log(req.body);
  const { title, image, description } = req.body;
  blogs.push({ title, image, description, id: uuidv4() });
  res.redirect("/blogs");
});

//Deatil page
app.get("/blogs/:id", (req, res) => {
  const { id } = req.params;
  // console.log(id);
  const blog = blogs.find((item) => item.id === id);
  res.render("detail", { blog });
});

//Edit blog form
app.get("/blogs/:id/edit", (req, res) => {
  const { id } = req.params;
  const blog = blogs.find((item) => item.id === id);
  res.render("edit", { blog });
});

//Update the blog
app.patch("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const index = blogs.findIndex((item) => item.id === id);
  // blogs[index] = { ...blogs[index], ...req.body };
  blogs[index] = { ...req.body, id };
  res.redirect("/blogs");
});

//Delete the blog
app.delete("/blogs/:id", (req, res) => {
  const { id } = req.params;
  blogs = blogs.filter((item) => item.id !== id);
  res.redirect("/blogs");
});

app.listen(port, () => {
  console.log(`Server Listening at PORT ${port}`);
});
