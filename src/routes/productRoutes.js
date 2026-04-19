const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const authMiddleware = require('../middlewares/authMiddleware'); 

// Perceba que o "authMiddleware" está no meio. Ele é a catraca que exige o Token!
router.post('/', authMiddleware, productController.create);
router.get('/', authMiddleware, productController.getAll);
router.put('/:id', authMiddleware, productController.update);
router.delete('/:id', authMiddleware, productController.delete);

module.exports = router;