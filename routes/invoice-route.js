const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceDetails-controller');

router.post('/add', invoiceController.AddDetails);
router.get('/', invoiceController.getDetails);
router.get('/edit/:id', invoiceController.editDetails);
router.post('/update/:id', invoiceController.updateDetails);
router.post('/delete/:id', invoiceController.deleteDetails);
module.exports = router;