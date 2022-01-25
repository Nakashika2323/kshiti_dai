const express = require("express");
const ejsmate = require("ejs-mate");
const path = require("path");
const PORT = 3000;

const app = express();

// configure ejsmate
app.engine("ejs", ejsmate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/aboutme", (req, res) => {
  res.render("aboutme");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/awards", (req, res) => {
  res.render("award");
});

app.get("/media", (req, res) => {
  res.render("media");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("/professional", (req, res) => {
  res.render("professional");
});

// listen for server
app.listen(PORT, () => {
  console.log(`Server running on PORT=${PORT}`);
});
