const express = require("express");
const { registerUser,loginUser, currentUser, deleteUser, getAllUsers } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler")


const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/current').get(validateToken, currentUser);
router.route('/:id').delete(deleteUser);
router.route('/').get(getAllUsers);


module.exports = router;
