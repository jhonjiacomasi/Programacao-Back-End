const express = require('express');
const router = express.Router();
const ProtectedController = require('../controllers/ProtectedController');

const protectedController = new ProtectedController();

router.get('/dashboard', (req, res) => {
    protectedController.getDashboardData(req, res);
});

router.get('/ecommerce', (req, res) => {
    protectedController.getEcommerceData(req, res);
});

module.exports = router;

