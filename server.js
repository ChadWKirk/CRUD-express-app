const express = require("express");
const app = express();
const ejs = require("ejs");

const PORT = process.env.PORT || 5000;

var Members = [
  { name: "Charlie", email: "Charlie@gmail.com" },
  { name: "William", email: "William@gmail.com" },
];

//Middleware to parse body into json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

//Retrieve
app.get("/", (req, res) => {
  res.render("index", { Members: Members });
});

//Create
app.post("/members", (req, res) => {
  const newMember = { name: req.body.name, email: req.body.email };
  Members.push(newMember);
  res.redirect("/");
});

//Delete
app.post("/delete/members/:name", (req, res) => {
  Members = Members.filter((member) => member.name !== req.params.name);
  res.redirect("/");
});

//Update
app.post("/update/members/:name", (req, res) => {
  Members = Members.filter((member) => member.name !== req.params.name);
  res.redirect("/");
});

app.get("/update/members", (req, res) => {
  res.render("update");
});

app.listen(PORT);
