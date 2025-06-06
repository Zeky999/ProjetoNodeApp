const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
  nomeCategoria: String,
  descricao: String,
  ativa: { type: Boolean, default: true }
});

module.exports = mongoose.model('Categoria', CategoriaSchema);
