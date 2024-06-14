const express = require('express');
const router = express.Router();
const studentEtatController = require('../../controllers/studentController/studentEtatController');

router.get('/get-all-etat-etudiant', studentEtatController.getAllStudentEtat);
router.post('/create-etat-etudiant', studentEtatController.createStudentEtat);

module.exports = router;
