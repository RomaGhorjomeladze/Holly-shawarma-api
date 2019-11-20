const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

exports.isAuthenticated = async (req, res, next) => {
  const token = req.headers["access-token"] || req.headers["authorization"];
  if (!token) {
    res.status(401).send("Access denied. No token provided");
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWTSECRET);
    let user = await User.findOne({ _id: decoded._id }).select(
      "-password -__v"
    );
    if (!user) {
      res.status(400).json({ message: "incorrect token" });
    } else {
      req.user = user;
      req.token = decoded
      next();
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
