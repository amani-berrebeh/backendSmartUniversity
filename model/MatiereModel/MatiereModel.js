const mongoose = require('mongoose');

const matiereSchema = new mongoose.Schema({
  code_matiere: String,
  matiere: String,
  type: String,
  semestre: String,
  volume: String,
  nbr_elimination: String,
  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Classe' }]

 
},
{ timestamps: true });

module.exports = mongoose.model('Matiere', matiereSchema);