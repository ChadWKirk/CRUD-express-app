const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;

const Members = [{ name: "charlie" }];

app.use(express.json()); //parses incoming requests with JSON payloads (basically turns req data into JSON).
app.use(express.urlencoded({ extended: false })); //Turns body into (parses) urlencoded data then parses into querystring library & creates a req.body object

//Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Members page
app.get("/members", (req, res) => {
  res.json(Members);
});

app.post("/members", (req, res) => {
  
  const newMember = { name: req.body.name, email: req.body.email };

  Members.push(newMember);
  res.json(Members);

  console.log(newMember);
});

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
