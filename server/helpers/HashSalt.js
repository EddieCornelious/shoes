const crypto = require("crypto");

const run = (function() {
  process.on("message", message => {
    let salt;
    if (message.type === 0) {
      salt = message.salt;
    } else if (message.type === 1) {
      salt = crypto.randomBytes(64).toString("hex");
    }

    crypto.pbkdf2(
      message.pw,
      salt.toString("hex"),
      100000,
      64,
      "sha512",
      (err, derivedKey) => {
        if (err) throw err;

        process.send({ hashSalt: derivedKey.toString("hex"), salt });
      }
    );
  });
})();

module.exports = run;
