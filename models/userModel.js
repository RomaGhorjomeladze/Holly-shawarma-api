const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
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

module.exports = mongoose.model("User", userSchema);
