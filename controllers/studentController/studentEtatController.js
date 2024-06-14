const studentEtatService = require('../../services/studentServices/studentEtatService');

exports.getAllStudentEtat = async (req, res) => {

  try {
    
    const studentEtat = await studentEtatService.getAllStudentEtat();
    res.json(studentEtat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createStudentEtat = async (req, res) => {
  try {
    const { value, Etat_ar, Etat_fr } = req.body;
    
    let event = await studentEtatService.createStudentEtat({ value, Etat_ar, Etat_fr });
    res.json(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
