const router = require('express').Router();
const {
  createCart,
  getSingleUser,
  saveCart,
  deleteCart,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveCart);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/carts/:cartId').delete(authMiddleware, deleteCart);

module.exports = router;
