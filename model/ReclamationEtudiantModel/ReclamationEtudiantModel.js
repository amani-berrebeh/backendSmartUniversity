const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReclamationSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'Etudiant', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  response: {type: String, required: false},
  status: { type: String, enum: ['pending', 'resolved', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reclamation', ReclamationSchema);