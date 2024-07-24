const DemandeEtudiant = require('../../model/DemandeEtudiantModel/DemandeEtudiantModel');


const createDemandeEtudiant = async (DemandeEtudiantData) => {
  const demandeEtudiant = new DemandeEtudiant(DemandeEtudiantData);
  return demandeEtudiant.save();
};

const getAllDemandeEtudiants = async () => {
  return DemandeEtudiant.find().populate('studentId');
};

const getDemandeEtudiantById = async (id) => {
  return DemandeEtudiant.findById(id).populate('studentId');
};

const updateDemandeEtudiant = async (id, updateData) => {
  return DemandeEtudiant.findByIdAndUpdate(id, updateData, { new: true }).populate('studentId');
};

const deleteDemandeEtudiant = async (id) => {
  return DemandeEtudiant.findByIdAndDelete(id).populate('studentId');
};

module.exports = {
  createDemandeEtudiant,
  getAllDemandeEtudiants,
  getDemandeEtudiantById,
  updateDemandeEtudiant,
  deleteDemandeEtudiant
};