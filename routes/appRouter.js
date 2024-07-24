const Router = require("express");
const router = new Router();

const eventRoutes = require("./eventRoutes/eventRoutes");
const userPermissionsRoutes = require("./userPermissionsRoutes/userPermissionsRoute");
const userRoutes = require("./userRoutes/userRoute");
const etatPersonnelRoutes = require("./etatPersonnelRoutes/etatPersonnelRoutes");
const postePersonnelRoutes = require("./postePersonnelRoutes/postePersonnelRoutes");
const gradePersonnelRoutes = require("./GradePersonnelRoutes/GradePersonnelRoutes");
const categoriePersonnelRoutes = require("./CategoriePersonnelRoutes/CategoriePersonnelRoutes");
const servicePersonnelRoutes = require("./ServicesPersonnelRoutes/ServicesPersonnelRoutes");
const etatEnseignantRoutes = require("./EtatCompteEnseignantRoutes/EtatCompteEnseignantRoutes");
const posteEnseignantRoutes = require("./PosteEnseignantRoutes/PosteEnseignantRoutes");
const gradeEnseignantRoutes = require("./GradeEnseignantRoutes/GradeEnseignantRoutes");
const specialiteEnseignantRoutes = require("./SpecialiteEnseignantRoutes/SpecialiteEnseignantRoutes");
const etatEtudiantRoutes = require("./EtatCompteEtudiantRoutes/EtatCompteEtudiantRoutes");
const typeInscriptionEtudiantRoutes = require("./TypeInscriptionEtudiantRoutes/TypeInscriptionEtudiantRoutes");
const departmentRoutes = require("./DepartementRoutes/DepartementRoutes");
const niveauClasseRoutes = require("./NiveauClasseRoutes/NiveauClasseRoutes");
const sectionClasseRoutes = require("./SectionClasseRoutes/SectionClasseRoutes");
const matiereRoutes = require("./MatiereRoutes/MatiereRoutes");
const salleRoutes = require("./SalleRoutes/SalleRoutes");
const classeRoutes = require("./ClasseRoutes/ClasseRoutes");
const etudiantRoutes= require("./EtudiantRoutes/EtudiantRoutes")
const reclamationEtudiantRoutes = require ("./ReclamationEtudiantRoutes/ReclamationEtudiantRoutes")
const reclamationEnseignantRoutes = require ("./ReclamationEnseignantRoutes/ReclamationEnseignantRoutes")
const reclamationPeronnelRoutes = require ("./ReclamationPersonnelRoutes/ReclamationPersonnelRoutes")
const demandeEtudiantRoutes = require ("./DemandeEtudiantRoutes/DemandeEtudiantRoutes")
const demandeEnseignantRoutes = require ("./DemandeEnseignantRoutes/DemandeEnseignantRoutes")
const demandePersonnelRoutes = require ("./DemandePersonnelRoutes/DemandePersonnelRoutes")
const enseignantRoutes=require("./EnseignantRoutes/EnseignantRoutes")
const personnelRoutes=require("./PersonnelRoutes/PersonnelRoutes")
const avisEtudiantRoutes= require ("./AvisEtudiantRoutes/AvisEtudiantRoutes")
router.use("/event", eventRoutes);
router.use("/user-permissions", userPermissionsRoutes);
router.use("/user", userRoutes);
router.use('/enseignant',enseignantRoutes);
router.use("/etudiant", etudiantRoutes);
router.use('/personnel',personnelRoutes);


router.use('/etat-personnel',etatPersonnelRoutes);
router.use('/poste-personnel',postePersonnelRoutes);
router.use('/grade-personnel',gradePersonnelRoutes);
router.use('/categorie-personnel',categoriePersonnelRoutes);
router.use('/service-personnel',servicePersonnelRoutes);
router.use('/etat-enseignant',etatEnseignantRoutes);
router.use('/poste-enseignant',posteEnseignantRoutes);
router.use('/grade-enseignant',gradeEnseignantRoutes);
router.use('/specialite-enseignant',specialiteEnseignantRoutes);

// etudiant
router.use('/etat-etudiant',etatEtudiantRoutes);
router.use('/type-inscription-etudiant',typeInscriptionEtudiantRoutes);


// departement
router.use("/department", departmentRoutes);

//niveau classe

router.use("/niveau-classe", niveauClasseRoutes);
// section classe

router.use("/section-classe", sectionClasseRoutes);

//matiere

router.use("/matiere", matiereRoutes);
//Salle
router.use("/salle", salleRoutes);

//Classe
router.use("/classe", classeRoutes);

//reclamation etudiant/ enseignant/ personnel
router.use("/reclamation-etudiant", reclamationEtudiantRoutes)
router.use("/reclamation-enseignant",reclamationEnseignantRoutes)
router.use("/reclamation-personnel",reclamationPeronnelRoutes)
//demande etudiant / enseignant/ personnel
router.use("/demande-etudiant", demandeEtudiantRoutes)
router.use("/demande-enseignant", demandeEnseignantRoutes)
router.use("/demande-personnel", demandePersonnelRoutes)

// Avis etudiant // enseignant / personnel

router.use("/avis-etudiant", avisEtudiantRoutes)
module.exports = router;