const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  bankAccounts: {
    tbc: {
      type: String
    },
    bog: {
      type: String
    }
  }
});
userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWTSECRET, {
    expiresIn: "24h"
  });
  return token;
};

module.exports = mongoose.model("User", userSchema);
