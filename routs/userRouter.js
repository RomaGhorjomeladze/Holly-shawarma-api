const router = require("express").Router();
const { signUp, listUsers, login, updateBankAccount, getBankAccounts, isLogedIn} = require("../controllers/userController");   
const {isAuthenticated} = require('../middlewares/userMiddleware')

router.post("/register", signUp);
router.post("/login", login);

router.post("/auto-login", isAuthenticated, isLogedIn)
router.get("/list",isAuthenticated, listUsers);
router.get('/accounts',isAuthenticated, getBankAccounts)

router.put('/account/:id',isAuthenticated, updateBankAccount)


module.exports = router;
