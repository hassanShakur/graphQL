const express = require('express');
const userCtrl = require('../controllers/userController');

const router = express.Router();

router.get('/', userCtrl.getAllUsers);
router.get('/:id', userCtrl.getUser);

module.exports = router;
