const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  try {
    let user = await User.find({ userName: req.body.user.userName });
    console.log(user);
    if (user.length >= 1) {
      res.status(400).json({ message: "such username already exists" });
    } else {
      bcrypt.hash(req.body.user.password, 10, async (err, hash) => {
        let user = new User({ ...req.body.user, password: hash });
        const newUser = await user.save();
        return res.status(200).json(newUser);
      });
    }
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.login = async (req, res) => {
  try {
    let logedInUser = await User.find({
      userName: req.body.user.userName
    });
    const match = await bcrypt.compare(
      req.body.user.password,
      logedInUser[0].password
    );

    if (match) {
      return res.status(200).json(logedInUser[0]);
    } else {
      return res.status(400).json({ error: "Username or Password incorrect" });
    }
  } catch (error) {
    res.status(404).json({ error });
  }
};

exports.listUsers = (req, res) => {
  User.find((err, data) => {
    if (err) throw err;
  })
    .select("userName isAdmin")
    .then((data) => {
      return res.status(200).json({ user: data });
    });
};

exports.updateBankAccount = async (req, res) => {
  try {
    if (req.body.tbc.length !== 22 && req.body.bog.length !== 22) {
      res.status(400).json({ error: "both bank accounts are invalid" });
    } else if (req.body.bog.length === 22 && req.body.tbc.length === 22) {
      User.findOneAndUpdate(
        { _id: req.params.id },
        { bankAccounts: req.body },
        { new: true },
        (err, doc) => {
          res.status(200).json(doc);
        }
      );
    } else if (req.body.bog.length === 22) {
      User.findOneAndUpdate(
        { _id: req.params.id },
        { "bankAccounts.bog": req.body.bog },
        { new: true },
        (err, doc) => {
          res.status(200).json(doc);
        }
      );
    } else if (req.body.tbc.length === 22) {
      User.findOneAndUpdate(
        { _id: req.params.id },
        { "bankAccounts.tbc": req.body.tbc },
        { new: true },
        (err, doc) => {
          res.status(200).json(doc);
        }
      );
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getBankAccounts = async (req, res) => {
  try {
    User.findOne({ isAdmin: true }, (err, doc) => {
      res.json(doc.bankAccounts);
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.test = async (req, res) => {
  await User.deleteMany();
  res.json({ message: "zd" });
};
