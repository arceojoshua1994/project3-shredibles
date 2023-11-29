const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveLogin,
  deleteLogin,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createLogin).put(authMiddleware, saveLogin);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/logins/:loginId').delete(authMiddleware, deleteLogin);

module.exports = router;
