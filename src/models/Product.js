const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
    min: [0.01, 'O preço deve ser positivo'],
  },
  quantidadeEstoque: {
    type: Number,
    required: true,
    min: [0, 'O estoque não pode ser negativo'],
  },
  categoria: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);