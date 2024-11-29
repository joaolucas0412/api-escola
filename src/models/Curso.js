const mongoose = require('mongoose');

const MusicaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  duracao: { type: Number, required: true },
  descricao: { type: String },
  disciplinas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina' }],
}, { timestamps: true });
module.exports = mongoose.model('Musica', MusicaSchema);