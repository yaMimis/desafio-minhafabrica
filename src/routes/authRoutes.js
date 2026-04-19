const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

// Rota de Login (POST /api/v1/auth/login)
router.post('/login', authController.login);

// Rota de Seed para criar o Admin (POST /api/v1/auth/seed)
router.post('/seed', authController.seed);

module.exports = router;