const mongoose = require("mongoose");
let ObjectId = mongoose.Schema.Types.ObjectId;

const getCurrentDate = ()=>{
  let day = new Date().getDate()
  let month = new Date().getMonth()
  let year = new Date().getFullYear()
  return `${day}/${month}/${year}`
}
const orderSchema = mongoose.Schema({
  price: {
    type: Number,
    default: 9
  },
  onion: {
    type: Boolean,
    default: true
  },
  spicy: {
    type: Boolean,
    default: false
  },
  mayonnaise: {
    type: Boolean,
    default: true
  },
  wet: {
    type: Boolean,
    default: false
  },
  ketchup: {
    type: Boolean,
    default: true
  },
  user: {
    userName: String,
    _id: String
  },
  date: {
    type: String,
    default: getCurrentDate()
  },
  paymentSuccess: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Order", orderSchema)
