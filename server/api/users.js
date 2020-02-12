const crypto = require("crypto");
const { fork } = require("child_process");

const process = fork("./genpw.js");

//signup
//process.send({username: "ed", pw: "lol", type: 1});

//login
//process.send({username: "ed", pw: "lol", type: 0, salt: "salt"});

process.on("message", message => {
  console.log(message.hashSalt);
  console.log(message.salt);
  process.kill();
});
