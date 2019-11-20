const router = require("express").Router();
const {
  createOrder,
  orders,
  removeOrders,
  removeOne,
  updateOrder
} = require("../controllers/orderController");
const { isAuthenticated } = require("../middlewares/userMiddleware");

router.post("/", isAuthenticated, createOrder);
router.get("/", isAuthenticated, orders);
router.delete("/:id", isAuthenticated, removeOne);
router.put("/:id", isAuthenticated, updateOrder);

router.get("/removeAll", removeOrders);

module.exports = router;
