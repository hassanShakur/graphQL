const express = require('express');
const companyCtrl = require('../controllers/companyController');

const router = express.Router();

router.get('/', companyCtrl.getAllCompanies);
router.get('/:id', companyCtrl.getCompany);

module.exports = router;
