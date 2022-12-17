const express = require("express"),
  cors = require("cors"),
  JSsoup = require("jssoup").default,
  app = express(),
  Middleware = require("./middleware"),
  request = require("request"),
  bcrypt = require("bcryptjs"),
  mongoose = require("mongoose");

app.use(cors());
app.use(express.json({ limit: "1mb" }));

try {
  mongoose.connect("mongodb://localhost:27017/importExportTwo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error.message);
}

const Model = require("./models/prospect.model");
const userModels = require("./models/user.models");

app.post("/scrapper", async (req, res) => {
  let soup = new JSsoup(req.body.myHtml);
  // var tag = soup.getElementByClass("VkpGBb");
  let formData = new FormData();
  formData.append("key", "value");

  const response = await request({
    url: "http://127.0.0.1:82",
    method: "POST",
    formData,
    form: formData,
    json: true, // <--Very important!!!
    // body: formData,
  });
  const d = await response.json();
  console.log(d);
  res.send("hello");
});

app.get(
  "/all",
  //  Middleware.AuthenticateFirmToken,
  async (req, res) => {
    const results = await Model.find({});
    res.json(results);
  }
);

Model.find().then((x) => {
  console.log(x);
});

app.put(
  "/update/:id",
  //  Middleware.AuthenticateFirmToken,
  async (req, res) => {
    console.log(req.body);
    const results = await Model.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(201).json({ hello: "world" });
  }
);

app.delete(
  "/delete/:id",
  // Middleware.AuthenticateFirmToken,
  async (req, res) => {
    const results = await Model.findOneAndDelete({ _id: req.params.id });
    res.json({ deleted: true });
  }
);

app.post("/register", async (req, res) => {
  try {
    const userModel = require("./models/user.models");
    const { username, password } = req.body;
    let user = await userModel.findOne({ username });
    if (user) return res.status(403);
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    console.log(req.body.username);
    user = await userModel.create({
      username: req.body.username,
      password: hash,
    });
    console.log(user);
    res.status(201);
  } catch (error) {
    console.log(error);
    console.log(error.message);
    res.status(500);
  }
});

app.get(
  "/byId/:id",
  //  Middleware.AuthenticateFirmToken,
  async (req, res) => {
    const results = await Model.findById(req.params.id);
    res.json(results);
  }
);

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  const user = await userModels.findOne({
    username,
  });
  if (!user)
    return res.status(403).json({
      auth: false,
    });
  const passCheck = await bcrypt.compare(password, user.password);
  if (passCheck)
    return res.status(201).json({
      id: user._id,
    });
  res.status(403).json({
    auth: false,
  });
});

// userModel.find({}).then((x) => {
//   console.log(x);
// });

app.listen((port = 3002), () => {
  console.log("Server Running on Port " + port);
});
