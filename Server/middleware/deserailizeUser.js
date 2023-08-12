const AuthorityModel = require("../model/Authority.model");
const privatekey = "privateKey";
const jwt = require("jsonwebtoken");
function decode(token) {
  try {
    const decoded = jwt.verify(token, privatekey);
    return { valid: true, expired: false, decoded };
  } catch (error) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}

const deserializeUser = async (req, res, next) => {
  let accessToken = req.headers.authorization;
  if (!accessToken) {
    return next();
  }
  accessToken = accessToken.replace("Bearer ", "");
  console.log(accessToken);
  const { valid, expired, decoded } = decode(accessToken);
  console.log(valid, expired);
  if (decoded) {
    const { _id } = decoded;

    const user = await AuthorityModel.findOne({ _id });

    if (user) {
      res.locals.user = user;
    }

    return next();
  }

  return next();
};

module.exports = deserializeUser;
