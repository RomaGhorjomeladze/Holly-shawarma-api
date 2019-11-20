const Order = require("../models/ordersModel");

exports.createOrder = async (req, res) => {
  try {
    let newOrder = new Order(req.body);
    await newOrder.save();
    return res.json({
      message: "your order has been created",
      order: newOrder
    });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

exports.orders = async (req, res) => {
  Order.find((data) => {}).exec((err, orders) => {
    if (err || !orders) {
      return res.status(400).json({ err });
    }
    return res.status(200).json({ orders });
  });
};

exports.removeOne = (req, res) => {
  Order.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
    if (err) throw err;
    res.status(200).json(doc);
  });
};
exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedOrder = await Order.findOneAndUpdate(
      { _id: id },
      req.body.updates,
      { new: true }
    );
    return res.status(200).json(updatedOrder);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.removeOrders = async (req, res) => {
  await Order.deleteMany();
  res.status(200).json({ message: "removed" });
};
