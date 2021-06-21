const validator = require("validator");

function signupMiddleware(req, res, next) {
  const userName = req.body.userName;
  const password = req.body.password;
  const email = req.body.email;

  if (!userName || !password || !email) {
    return res
      .status(400)
      .json({ msg: "Please insert a value for all fields" });
  }

  if (
    validator.isEmpty(userName) ||
    validator.isEmpty(password) ||
    validator.isEmpty(email)
  ) {
    return res
      .status(400)
      .json({ msg: "Please insert a value for all fields" });
  }

  if (!validator.isAlphanumeric(userName) || userName.length > 255) {
    return res
      .status(400)
      .json({ msg: "Invalid username characters or length" });
  }

  if (password.length > 100 || password.length < 8) {
    return res.status(400).json({ msg: "Password too long or too short" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ msg: "Please enter a valid email" });
  }

  next();
}

function loginMiddleware(req, res, next) {
  const userName = req.body.userName;
  const password = req.body.password;

  if (!userName || !password) {
    return res
      .status(400)
      .json({ msg: "Please insert a value for all fields" });
  }

  if (validator.isEmpty(userName) || validator.isEmpty(password)) {
    return res
      .status(400)
      .json({ msg: "Please insert a value for all fields" });
  }

  if (!validator.isAlphanumeric(userName) || userName.length > 255) {
    return res
      .status(400)
      .json({ msg: "Invalid username characters or length" });
  }

  if (password.length > 100 || password.length < 8) {
    return res.status(400).json({ msg: "Password too long or too short" });
  }

  next();
}

module.exports = {
  signupMiddleware,
  loginMiddleware
};
