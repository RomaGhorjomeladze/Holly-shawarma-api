const router = require("express").Router();
const {
  createOrder,
  orders,
  removeOrders,
  removeOne,
  updateOrder
} = require("../controllers/orderController");

router.post("/", createOrder);
router.get("/", orders);
router.delete("/:id", removeOne);
router.put("/:id", updateOrder)

router.get("/removeAll", removeOrders);

module.exports = router;
