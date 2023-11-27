// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const token = jwt.sign({ id }, "remoteEyee007", { expiresIn: "30d" });
  return token;
};
// export default generateToken;
module.exports = generateToken;
