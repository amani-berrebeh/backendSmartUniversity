const classeModel = require("../../model/ClasseModels/ClasseModels");
const MatiereModel = require("../../model/MatiereModel/MatiereModel");
const Classe = require("../../model/ClasseModels/ClasseModels");

const createClasse = async (classe) => {
  try {
    return await classeModel.create(classe);
  } catch (error) {
    console.error("Error creating classe:", error);
    throw error;
  }
};
const getClasses = async () => {
  try {
    return await classeModel
      .find()
      .populate("departement")
      .populate("niveau_classe")
      .populate("section_classe")
      .populate("matieres");;
  } catch (error) {
    console.error("Error fetching classes:", error);
    throw error;
  }
};

const updateClasse = async (id, updateData) => {
  try {
    return await classeModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .populate("departement")
      .populate("niveau_classe")
      .populate("section_classe")
      .populate("matieres");;
  } catch (error) {
    console.error("Error updating classe:", error);
    throw error;
  }
};

const deleteClasse = async (id) => {
  try {
    return await Classe.findByIdAndDelete(id);
  } catch (error) {
    console.error("Error deleting classe:", error);
    throw error;
  }
};

const getClasseById = async (id) => {
  try {
    return await classeModel
      .findById(id)
      .populate("departement")
      .populate("niveau_classe")
      .populate("section_classe")
      .populate("matieres");
  } catch (error) {
    console.error("Error fetching classe by ID:", error);
    throw error;
  }
};

async function assignMatieresToClasse(classeId, matiereIds) {
  try {
    const classe = await Classe.findById(classeId);

    if (!classe) {
      throw new Error("Classe not found");
    }

    const matieres = await MatiereModel.find({ _id: { $in: matiereIds } });

    classe.matieres.push(...matiereIds);
    await classe.save();
    for (let matiere of matieres) {
      if (!matiere.classes.includes(classeId)) {
        matiere.classes.push(classeId);
        await matiere.save();
      }
    }

    return classe;
  } catch (error) {
    throw new Error(`Error assigning matieres to classe: ${error.message}`);
  }
}

async function deleteAssignedMatiereFromClasse(classeId, matiereId) {
  try {
    // Find the classe by ID
    const classe = await Classe.findById(classeId);

    // Throw error if classe is not found
    if (!classe) {
      throw new Error("Classe not found");
    }

    // Remove matiereId from the matieres array of the classe
    classe.matieres = classe.matieres.filter(m => m.toString() !== matiereId);
    await classe.save();

    // Find the matiere by ID
    const matiere = await MatiereModel.findById(matiereId);

    // If matiere exists, remove classeId from its classes array
    if (matiere) {
      matiere.classes = matiere.classes.filter(c => c.toString() !== classeId);
      await matiere.save();
    }

    // Return updated classe
    return classe;
  } catch (error) {
    throw new Error(`Error deleting assigned matiere from classe: ${error.message}`);
  }
}

module.exports = {
  createClasse,
  getClasses,
  updateClasse,
  deleteClasse,
  getClasseById,
  assignMatieresToClasse,
  deleteAssignedMatiereFromClasse
};