const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvisEtudiantSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  groupe_classe: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Classe', required: true }],
  date_avis: { type: Date, required: false },
  lien: { type: String, required: false },
  gallery: { type: [String], required: false },
  pdf: { type: String, required: false },
}, 
{ timestamps: true });

module.exports = mongoose.model('AvisEtudiant', AvisEtudiantSchema);