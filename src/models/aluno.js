const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
