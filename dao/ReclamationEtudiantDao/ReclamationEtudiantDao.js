const Reclamation = require('../../model/ReclamationEtudiantModel/ReclamationEtudiantModel');


const createReclamation = async (reclamationData) => {
  const reclamation = new Reclamation(reclamationData);
  return reclamation.save();
};

const getAllReclamations = async () => {
  return Reclamation.find().populate('studentId');
};

const getReclamationById = async (id) => {
  return Reclamation.findById(id).populate('studentId');
};

const updateReclamation = async (id, updateData) => {
  return Reclamation.findByIdAndUpdate(id, updateData, { new: true }).populate('studentId');
};

const deleteReclamation = async (id) => {
  return Reclamation.findByIdAndDelete(id).populate('studentId');
};

module.exports = {
  createReclamation,
  getAllReclamations,
  getReclamationById,
  updateReclamation,
  deleteReclamation
};