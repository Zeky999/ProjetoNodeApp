const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String
});

module.exports = mongoose.model('Cliente', ClienteSchema);
