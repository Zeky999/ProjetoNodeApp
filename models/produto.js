const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nomeProduto: String,
  descricao: String,
  preco: Number,
  estoque: Number,
  ativo: { type: Boolean, default: true },
  categoriaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }
});

module.exports = mongoose.model('Produto', ProdutoSchema);
