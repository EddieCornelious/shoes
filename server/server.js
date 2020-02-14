const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../build")));
app.use("/images", express.static(path.join(__dirname, "./images")));

app.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers["authorization"];
  if (!token) return next();

  token = token.replace("Bearer ", "");

  jwt.verify(token, "secret", function(err, user) {
    if (err) {
      return res.status(401).json({
        message: "Please register"
      });
    } else {
      req.user = user;
      console.log(user);
      next();
    }
  });
});

app.use("/api", require("./api/index.js"));

if (process.env.NODE_ENV !== "production") {
  console.log("cors enabled for development");
  app.use(cors());
}

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(501).json({ msg: "Internal Server Error" });
});

app.listen(process.env.PORT || 8080);
