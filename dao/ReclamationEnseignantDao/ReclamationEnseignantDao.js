const ReclamationEnseignant = require('../../model/ReclamationEnseignantModel/ReclamationEnseignantModel');


const createReclamation = async (reclamationData) => {
  const reclamation = new ReclamationEnseignant(reclamationData);
  return reclamation.save();
};

const getAllReclamations = async () => {
  return ReclamationEnseignant.find().populate('enseignantId');
};

const getReclamationById = async (id) => {
  return ReclamationEnseignant.findById(id).populate('enseignantId');
};

const updateReclamation = async (id, updateData) => {
  return ReclamationEnseignant.findByIdAndUpdate(id, updateData, { new: true }).populate('enseignantId');
};

const deleteReclamation = async (id) => {
  return ReclamationEnseignant.findByIdAndDelete(id).populate('enseignantId');
};

module.exports = {
  createReclamation,
  getAllReclamations,
  getReclamationById,
  updateReclamation,
  deleteReclamation
};