const mongoose = require('mongoose');

const typeInscriptionEtudiantSchema = new mongoose.Schema({
  value_type_inscription: { type: String, unique: true },
  type_ar: String,
  type_fr: String,

 
},
{ timestamps: true });

module.exports = mongoose.model('TypeInscriptionEtudiant', typeInscriptionEtudiantSchema);