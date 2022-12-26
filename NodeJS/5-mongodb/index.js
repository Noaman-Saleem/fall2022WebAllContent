const express = require("express");
const { v4: uuidv4 } = require("uuid");
var methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const app = express();

const Blog = require("./model/Blog");

const port = 3000;

mongoose
  .connect(
    "mongodb+srv://noaman:musawali@cluster0.qsypljh.mongodb.net/webDummy?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log("Oh No Error!");
    console.log(e);
  });

//Parsing HTML form Body Data
// app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//setting static assets public directory
app.use(express.static(path.join(__dirname, "/public")));

//Setting view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Fake Database

//Home Route
app.get("/", (req, res) => {
  // console.log(uuidv4());
  // console.log(blogs);
  res.render("home");
});

//Show all Blogs
app.get("/blogs", async (req, res) => {
  const blogs = await Blog.find({});
  res.render("blogs", { blogs });
});

//Render create new blog form
app.get("/blogs/new", (req, res) => {
  res.render("create-form");
});

//Create new Blog
app.post("/blogs", async (req, res) => {
  const { title, description, image, category } = req.body;
  // console.log(req.body.title);
  const blog = new Blog({
    title,
    description,
    image,
    category,
  });
  await blog.save();
  res.redirect("/blogs");
});

//show detail page
app.get("/blogs/:id", async (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  // const foundBlog = blogs.find((b) => b.id == id);

  const foundBlog = await Blog.findById(id);
  res.render("detail", { foundBlog });
});

//Render Edit Form
app.get("/blogs/:id/edit", async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  // const foundBlog = blogs.find((b) => b.id == id);
  // console.log(foundBlog);
  const foundBlog = await Blog.findById(id);
  res.render("edit", { foundBlog });
});

//Update Route
app.patch("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, image, category } = req.body;
  // console.log(req.body);
  // const index = blogs.findIndex((b) => b.id == id);
  // console.log(index);
  // blogs[index] = { ...blogs[index], ...req.body };

  await Blog.findByIdAndUpdate(id, { title, description, image, category });
  res.redirect("/blogs");
});

//Delete Blog
app.delete("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  // blogs = blogs.filter((b) => b.id !== id);
  await Blog.findByIdAndDelete(id);
  res.redirect("/blogs");
});

//search by category
app.get("/search", async (req, res) => {
  const { category } = req.query;
  const blog = await Blog.find({ category });
  console.log(blog);
});

app.listen(port, () => {
  console.log(`Server Listening at PORT ${port}`);
});
