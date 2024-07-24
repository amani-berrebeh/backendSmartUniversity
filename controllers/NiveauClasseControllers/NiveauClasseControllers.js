const niveauClasseService = require("../../services/NiveauClasseServices/NiveauClasseServices");

const addNiveauClasse = async (req, res) => {
  try {
    const { abreviation, name_niveau_fr , name_niveau_ar } = req.body;

    const niveauClasse = await niveauClasseService.registerNiveauClasse({
        abreviation, name_niveau_fr , name_niveau_ar
    });
    res.json(niveauClasse);
  } catch (error) {
    console.error(error);
  }
};

const updateNiveauClasseById = async (req, res) => {
  try {
    const niveauClasseId = req.params.id;
    const { abreviation, name_niveau_fr , name_niveau_ar } = req.body;

    const updatedNiveauClasse= await niveauClasseService.updateNiveauClasseDao(niveauClasseId, {
        abreviation, name_niveau_fr , name_niveau_ar
    });

    if (!updatedNiveauClasse) {
      return res.status(404).send("Niveau Classe not found!");
    }
    res.json(updatedNiveauClasse);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getNiveauClasseById = async (req, res) => {
  try {
    const niveauClasseId = req.params.id;

    const getNiveauClasse= await niveauClasseService.getNiveauClasseDaoById(niveauClasseId);

    if (!getNiveauClasse) {
      return res.status(404).send("Niveau Classe not found");
    }
    res.json(getNiveauClasse);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getAllNiveauxClasse = async (req, res) => {
  try {
    const niveauxClasse = await niveauClasseService.getNiveauxClasseDao();
    res.json(niveauxClasse);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteNiveauClasseById = async (req, res) => {
  try {
    const niveauClasseId = req.params.id;

    const deletedNiveauClasse = await niveauClasseService.deleteNiveauClassetDao(niveauClasseId);

    if (!deletedNiveauClasse) {
      return res.status(404).send("Niveau Classe not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
// 

module.exports = {
    deleteNiveauClasseById,
    getAllNiveauxClasse,
    getNiveauClasseById,
    updateNiveauClasseById,
    addNiveauClasse


};