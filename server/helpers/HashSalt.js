const crypto = require("crypto");

function hashSalt(message, done) {
  return new Promise(function(resolve, reject) {
    let salt;
    if (message.type === 0) {
      salt = message.salt;
    } else if (message.type === 1) {
      salt = crypto.randomBytes(64).toString("hex");
    }

    crypto.pbkdf2(
      message.password,
      salt.toString("hex"),
      100000,
      64,
      "sha512",
      (err, derivedKey) => {
        if (err) reject(err);
        resolve({ hashSalt: derivedKey.toString("hex"), salt });
      }
    );
  });
}

module.exports = hashSalt;
