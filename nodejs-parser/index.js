const express = require("express"),
  app = express(),
  cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("hello");
});

app.listen((port = 3005), () => {
  console.log("Port " + port);
});
