const reclamationDao = require('../../dao/ReclamationEnseignantDao/ReclamationEnseignantDao');


const createReclamation = async (reclamationData) => {
  return reclamationDao.createReclamation(reclamationData);
};

const getAllReclamations = async () => {
  return reclamationDao.getAllReclamations();
};

const getReclamationById = async (id) => {
  return reclamationDao.getReclamationById(id);
};

const updateReclamation = async (id, updateData) => {
  return reclamationDao.updateReclamation(id, updateData);
};

const deleteReclamation = async (id) => {
  return reclamationDao.deleteReclamation(id);
};

module.exports = {
  createReclamation,
  getAllReclamations,
  getReclamationById,
  updateReclamation,
  deleteReclamation
};