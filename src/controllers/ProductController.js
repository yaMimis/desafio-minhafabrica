const productService = require('../services/ProductService');

class ProductController {
  async create(req, res) {
    try {
      const product = await productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) { res.status(400).json({ message: error.message }); }
  }

  async getAll(req, res) {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (error) { res.status(500).json({ message: error.message }); }
  }

  async update(req, res) {
    try {
      const product = await productService.updateProduct(req.params.id, req.body);
      res.json(product);
    } catch (error) { res.status(400).json({ message: error.message }); }
  }

  async delete(req, res) {
    try {
      await productService.deleteProduct(req.params.id);
      res.json({ message: 'Produto deletado com sucesso!' });
    } catch (error) { res.status(400).json({ message: error.message }); }
  }
}

module.exports = new ProductController();