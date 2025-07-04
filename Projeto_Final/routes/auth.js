const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

const authController = new AuthController();

router.post('/login', (req, res) => {
    authController.processLogin(req, res);
});

router.post('/logout', (req, res) => {
    authController.processLogout(req, res);
});

router.get('/logout', (req, res) => {
    authController.processLogout(req, res);
});

module.exports = router;

