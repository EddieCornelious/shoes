const crypto = require("crypto");
const { fork } = require("child_process");
const Query = require("../helpers/Query.js");
const router = require("express").Router();
const { signupMiddleware, loginMiddleware } = require("../middleware/index.js");
const validator = require("validator");
const hashSalt = require("../helpers/HashSalt.js");
const jwt = require("jsonwebtoken");

function createToken(userName, email, id) {
  const user = {
    userName,
    email,
    id
  };
  const token = jwt.sign(user, "secret");

  return token;
}

router.post("/signup", signupMiddleware, function(req, res, next) {
  const userName = validator.escape(req.body.userName);
  const password = validator.escape(req.body.password);
  const email = validator.escape(req.body.email);

  Query.exec("SELECT * FROM users WHERE users.username = ?", [userName])
    .then(function(results, fields) {
      if (results.length) {
        return res.status(403).json({ msg: "User name already taken" });
      }

      return hashSalt({ userName, password, type: 1 }).then(function(
        hashResult
      ) {
        const values = [
          [userName, email, hashResult.hashSalt, hashResult.salt]
        ];
        Query.exec(
          "INSERT INTO users (username, email, pword, salt) VALUES ?",
          [values]
        ).then(function(results, fields) {
          return res.status(201).json({
            token: createToken(userName, email, results[0].insertId),
            msg: "Account created successfully"
          });
        });
      });
    })
    .catch(next);
});

router.post("/login", loginMiddleware, function(req, res, next) {
  const userName = validator.escape(req.body.userName);
  const password = validator.escape(req.body.password);

  Query.exec("SELECT * FROM users WHERE users.username = ?", [userName])
    .then(function(results, fields) {
      if (!results || !results.length) {
        return res
          .status(401)
          .json({ msg: "User does not exist in our records" });
      }

      const storedPw = results[0].pword;
      const storedSalt = results[0].salt;
      return hashSalt({ userName, password, type: 0, salt: storedSalt }).then(
        function(hashResult) {
          if (hashResult.hashSalt === storedPw) {
            return res.status(200).json({
              token: createToken(
                results[0].username,
                results[0].email,
                results[0].user_id
              ),
              msg: "Login success"
            });
          } else {
            return res
              .status(401)
              .json({ msg: "Incorrect user name or password" });
          }
        }
      );
    })
    .catch(next);
});

//signup
//process.send({ username: "ed", pw: "lol", type: 1 });

//login
/*process.send({ username: "ed", pw: "lol", type: 0, salt: "salt" });

process.on("message", message => {
  console.log(message.hashSalt);
  console.log(message.salt);
});*/

module.exports = router;
