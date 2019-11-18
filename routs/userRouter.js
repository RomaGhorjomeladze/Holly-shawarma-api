const router = require("express").Router();
const { signUp, listUsers, login, updateBankAccount, getBankAccounts} = require("../controllers/userController");

router.post("/register", signUp);
router.post("/login", login);

router.get("/list", listUsers);
router.get('/accounts', getBankAccounts)

router.put('/account/:id', updateBankAccount)

module.exports = router;
