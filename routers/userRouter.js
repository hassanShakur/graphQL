const express = require('express');
const userCtrl = require('../controllers/userController');

const router = express.Router();

router.route('/').get(userCtrl.getAllUsers).post(userCtrl.createUser);
router.get('/:id', userCtrl.getUser);

module.exports = router;
