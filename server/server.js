const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const Query = require("./helpers/Query.js");
const app = express();

app.use(express.static(path.join(__dirname, "../build")));
app.use("/images", express.static(path.join(__dirname, "./images")));

if (process.env.NODE_ENV !== "production") {
  console.log("cors enabled for development");
  app.use(cors());
}

app.get("/api/ping", function(req, res) {
  Query.exec("SELECT * FROM colors")
    .then(results => {
      res.status(200).json(results);
    })
    .catch(function(err) {
      res.status(500).json({ err: "INTERNAL ERROR" });
    });
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(process.env.PORT || 8080);
