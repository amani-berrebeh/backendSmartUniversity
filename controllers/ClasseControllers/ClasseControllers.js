const classeService = require("../../services/ClasseServices/ClasseServices");
const classeDao= require ("../../dao/ClasseDao/ClasseDao")
const Matiere = require ("../../model/MatiereModel/MatiereModel")

const addClasse = async (req, res) => {
  try {
    const {
      section_classe,
      niveau_classe,
      departement,
      nom_classe_ar,
      nom_classe_fr,
    } = req.body;

    const classeJson = await classeService.createClasse({
      section_classe,
      niveau_classe,
      departement,
      nom_classe_ar,
      nom_classe_fr,
    });
    res.json(classeJson);
  } catch (error) {
    console.error(error);
  }
};

const updateClasseById = async (req, res) => {
  try {
    const classeId = req.params.id;
    const {
      section_classe,
      niveau_classe,
      departement,
      nom_classe_ar,
      nom_classe_fr,
    } = req.body;

    const updatedClasse = await classeService.getClasseById(classeId, {
      section_classe,
      niveau_classe,
      departement,
      nom_classe_ar,
      nom_classe_fr,
    });

    if (!updatedClasse) {
      return res.status(404).send("Classe not found!");
    }
    res.json(updatedClasse);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getClasseById = async (req, res) => {
  try {
    const classeId = req.params.id;

    const getClasse = await classeService.getClasseById(classeId);

    if (!getClasse) {
      return res.status(404).send("Classe not found");
    }
    res.json(getClasse);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getAllClasses = async (req, res) => {
  try {
    const classes = await classeService.getClasses();
    res.json(classes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteClasseById = async (req, res) => {
  try {
    const classeId = req.params.id;

    const deletedClasse = await classeService.deleteClasseById(classeId);

    if (!deletedClasse) {
      return res.status(404).send("Classe not found");
    }

    const updateResult = await Matiere.updateMany(
      { classes: classeId },
      { $pull: { classes: classeId } }
    );

    console.log("Update result:", updateResult);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

async function assignMatieresToClasseController(req, res, next) {
  const classeId = req.params.classeId;
  const matiereIds = req.body.matiereIds;

  try {
    const updatedClasse = await classeService.assignMatieresToClasse(classeId, matiereIds);
    res.status(200).json(updatedClasse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



async function deleteAssignedMatiereFromClasse(req, res) {
  const { classeId, matiereId } = req.params;

  try {
    // Call the DAO function to delete assigned matiere from classe
    const updatedClasse = await classeDao.deleteAssignedMatiereFromClasse(classeId, matiereId);

    // Send the updated classe object as JSON response
    res.json(updatedClasse);
  } catch (error) {
    // Handle any errors that occur during the deletion process
    console.error('Error deleting assigned matiere from classe:', error);
    res.status(500).json({ error: 'Server error' });
  }
}


module.exports = {
  addClasse,
  updateClasseById,
  getClasseById,
  getAllClasses,
  deleteClasseById,
  assignMatieresToClasseController,
  deleteAssignedMatiereFromClasse
};