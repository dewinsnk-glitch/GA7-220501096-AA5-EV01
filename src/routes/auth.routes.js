// Importacion de router de express
const express = require('express');
const router = express.Router();

// Importacio del controlador
const authController = require('../controllers/auth.controller');

// Ruta para el registro
router.post('/register', authController.register);

// Ruta para el inicio de sesion
router.post('/login', authController.login);

module.exports = router;