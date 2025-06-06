const mongoose = require('mongoose');

const VendaSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  itensVendidos: [{
    produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto' },
    quantidade: Number
  }],
  total: Number,
  formaPagamento: { type: String, enum: ['dinheiro', 'cartao', 'pix'], default: 'dinheiro' },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Venda', VendaSchema);
