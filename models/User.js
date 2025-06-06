const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nomeCompleto: String,
  email: { type: String, unique: true },
  senha: String,
  tipoUsuario: { type: String, enum: ['admin', 'comum'], default: 'comum' },
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
