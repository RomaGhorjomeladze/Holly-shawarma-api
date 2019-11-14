const router = require("express").Router();
const { signUp, listUsers, login , test, updateBankAccount, getBankAccounts} = require("../controllers/userController");

router.post("/register", signUp);
router.post("/login", login);

router.get("/list", listUsers);
router.get('/test', test)
router.get('/bankAccounts', getBankAccounts)

router.put('/:id', updateBankAccount)

module.exports = router;
