const productRepository = require('../repositories/ProductRepository');

class ProductService {
  async createProduct(data) {
    if (data.preco <= 0) throw new Error('O preço deve ser maior que zero.');
    if (data.quantidadeEstoque < 0) throw new Error('O estoque não pode ser negativo.');
    return await productRepository.create(data);
  }
  
  async getAllProducts() { return await productRepository.findAll(); }
  
  async updateProduct(id, data) { 
    if (data.preco && data.preco <= 0) throw new Error('O preço deve ser maior que zero.');
    return await productRepository.update(id, data); 
  }
  
  async deleteProduct(id) { return await productRepository.delete(id); }
}

module.exports = new ProductService();