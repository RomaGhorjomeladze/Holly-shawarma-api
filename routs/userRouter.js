const router = require("express").Router();
const { signUp, listUsers, login , test} = require("../controllers/userController");

router.post("/register", signUp);
router.post("/login", login);

router.get("/list", listUsers);
router.get('/test', test)

module.exports = router;
