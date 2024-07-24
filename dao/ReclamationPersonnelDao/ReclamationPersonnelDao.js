const Reclamation = require('../../model/ReclamationPersonnelModel/ReclamationPersonnelModel');


const createReclamation = async (reclamationData) => {
  const reclamation = new Reclamation(reclamationData);
  return reclamation.save();
};

const getAllReclamations = async () => {
  return Reclamation.find().populate('personnelId');
};

const getReclamationById = async (id) => {
  return Reclamation.findById(id).populate('personnelId');
};

const updateReclamation = async (id, updateData) => {
  return Reclamation.findByIdAndUpdate(id, updateData, { new: true }).populate('personnelId');
};

const deleteReclamation = async (id) => {
  return Reclamation.findByIdAndDelete(id).populate('personnelId');
};

module.exports = {
  createReclamation,
  getAllReclamations,
  getReclamationById,
  updateReclamation,
  deleteReclamation
};