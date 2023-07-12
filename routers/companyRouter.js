const express = require('express');
const companyCtrl = require('../controllers/companyController');

const router = express.Router();

router.get('/', companyCtrl.getAllCompanies);
router.get('/:id', companyCtrl.getCompany);
router.get('/:id/users', companyCtrl.getCompanyUsers);

module.exports = router;
