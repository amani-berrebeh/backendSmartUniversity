const express = require('express');
const etudiantController = require('../../controllers/StudentController/StudentController');

const router = express.Router();

router.post('/create-etudiant', etudiantController.addStudent);
router.get('/get-all-etudiant', etudiantController.getAllStudents);

module.exports = router;