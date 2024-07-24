const DemandeEnseignant = require('../../model/DemandeEnseignantModel/DemandeEnseignantModel');


const createDemandeEnseignant = async (DemandeEnseignantData) => {
  const demandeEnseignant = new DemandeEnseignant(DemandeEnseignantData);
  return demandeEnseignant.save();
};

const getAllDemandeEnseignants = async () => {
  return DemandeEnseignant.find().populate('enseignantId');
};

const getDemandeEnseignantById = async (id) => {
  return DemandeEnseignant.findById(id).populate('enseignantId');
};

const updateDemandeEnseignant = async (id, updateData) => {
  return DemandeEnseignant.findByIdAndUpdate(id, updateData, { new: true }).populate('enseignantId');
};

const deleteDemandeEnseignant = async (id) => {
  return DemandeEnseignant.findByIdAndDelete(id).populate('enseignantId');
};

module.exports = {
  createDemandeEnseignant,
  getAllDemandeEnseignants,
  getDemandeEnseignantById,
  updateDemandeEnseignant,
  deleteDemandeEnseignant
};