const reclamationService = require('../../services/ReclamationPersonnelServices/ReclamationPersonnelServices');

const createReclamation = async (req, res) => {
  try {
    const reclamation = await reclamationService.createReclamation(req.body);
    res.status(201).json(reclamation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllReclamations = async (req, res) => {
  try {
    const reclamations = await reclamationService.getAllReclamations();
    res.status(200).json(reclamations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getReclamationById = async (req, res) => {
  try {
    const reclamation = await reclamationService.getReclamationById(req.params.id);
    if (!reclamation) {
      return res.status(404).json({ message: 'Reclamation not found' });
    }
    res.status(200).json(reclamation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateReclamation = async (req, res) => {
  try {
    const updatedReclamation = await reclamationService.updateReclamation(req.params.id, req.body);
    if (!updatedReclamation) {
      return res.status(404).json({ message: 'Reclamation not found' });
    }
    res.status(200).json(updatedReclamation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteReclamation = async (req, res) => {
  try {
    const deletedReclamation = await reclamationService.deleteReclamation(req.params.id);
    if (!deletedReclamation) {
      return res.status(404).json({ message: 'Reclamation not found' });
    }
    res.status(200).json({ message: 'Reclamation deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createReclamation,
  getAllReclamations,
  getReclamationById,
  updateReclamation,
  deleteReclamation
};