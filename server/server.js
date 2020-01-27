const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
/*
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "shoe_store"
});
*/
app.use(express.static(path.join(__dirname, "../build")));
app.use("/images", express.static(path.join(__dirname, "../src/images")));

app.get("/ping", function(req, res) {
  res.json({
    name: "poppopopo"
  });
  /*
  connection.connect();
  connection.query("SELECT * FROM Users", function(error, results, fields) {
    if (error) throw error;
    connection.end();
    res.json({ results });
  });

  connection.end();*/
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(process.env.PORT || 8080);
