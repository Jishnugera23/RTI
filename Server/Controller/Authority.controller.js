const privatekey = "privateKey";
const path =require('path');
const AuthorityModel = require("../model/Authority.model");
const jwt = require("jsonwebtoken");
const signup = async (req, res) => {
  try {
    // console.log(req);
    await AuthorityModel.create(req.body);
    
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Error",
    });
  }

  return res.json({ message: "Authority Created" });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AuthorityModel.findOne({ email });
    // console.log(user,"ehllo")
    // console.log(password);
    // console.log(user.comparePassword(password));
    // console.log(!user)
    
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    const p= await user.comparePassword(password);
    if (p===false) {
      // console.log("haan main chala")
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }
    const token = jwt.sign(user.toJSON(), privatekey, {
      expiresIn: 23 * 60 * 60,
    });

    return  res.status(200).json({ message: "Login Success",authentication_token:token});
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Error",
    });
  }
};

module.exports = { login, signup };
