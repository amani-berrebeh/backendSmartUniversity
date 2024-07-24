const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DemandePersonnelSchema = new Schema({
  personnelId: { type: Schema.Types.ObjectId, ref: 'Personnel', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  piece_demande:{type: String, required: true},
  langue:{type: String, required: true},
  nombre_copie:{type: String, required: true},
  response: {type: String, required: false},
  status: { type: String, enum: ['pending', 'resolved', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DemandePersonnel', DemandePersonnelSchema);