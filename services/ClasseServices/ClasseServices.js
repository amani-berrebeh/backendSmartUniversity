const classeDao = require("../../dao/ClasseDao/ClasseDao");
const Classe = require("../../model/ClasseModels/ClasseModels");
const ClasseModels = require("../../model/ClasseModels/ClasseModels");
const MatiereModel = require("../../model/MatiereModel/MatiereModel");

const createClasse = async (userData) => {
  try {
    const createdClasse = await classeDao.createClasse(userData);
    const populatedClasse = await ClasseModels.findById(createdClasse._id)
      .populate("departement")
      .populate("niveau_classe")
      .populate("section_classe");

    return populatedClasse;
  } catch (error) {
    console.error("Error in classe service:", error);
    throw error;
  }
};

const updateClasse = async (id, updateData) => {
  return await classeDao.updateClasse(id, updateData);
};

const getClasseById = async (id) => {
  return await classeDao.getClasseById(id);
};

const getClasses = async () => {
  const result = await classeDao.getClasses();
  return result;
};

const deleteClasseById = async (id) => {
  try {
    return await classeDao.deleteClasse(id);
  } catch (error) {
    console.error("Error deleting classe:", error);
    throw error;
  }
};
async function assignMatieresToClasse(classeId, matiereIds) {
  try {
    const updatedClasse = await classeDao.assignMatieresToClasse(classeId, matiereIds);
    const populatedClasse = await Classe.findById(classeId).populate('matieres').exec();

    return populatedClasse;
  } catch (error) {
    throw new Error(`Error assigning matieres to classe: ${error.message}`);
  }
}



module.exports = {
  createClasse,
  updateClasse,
  getClasseById,
  getClasses,
  deleteClasseById,
  assignMatieresToClasse,

};