const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../build")));
app.use("/images", express.static(path.join(__dirname, "./images")));

const Query = require("./helpers/Query.js");

app.get("/ping", function(req, res) {
  Query.exec("SELECT * FROM colors")
    .then(results => {
      console.log(results);
    })
    .catch(function(err) {
      console.log(err);
    });

  res.end();
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(process.env.PORT || 8080);
