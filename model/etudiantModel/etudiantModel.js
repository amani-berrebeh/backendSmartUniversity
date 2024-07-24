const mongoose = require('mongoose');

const etudiantSchema = new mongoose.Schema({
  nom_fr: String,
  nom_ar: String,
  photo_profil:String,
  prenom_fr: String,
  prenom_ar: String,
  lieu_naissance_fr: String,
  lieu_naissance_ar: String,
  date_naissance: String,
  nationalite: String,
  etat_civil:String,
  sexe: String,
  num_CIN: String,
  face_1_CIN: String,
  face_2_CIN: String,
  fiche_paiement: String,
  etat_compte: { type: mongoose.Schema.Types.ObjectId, ref: 'EtatCompteEtudiant' } ,
  groupe_classe: { type: mongoose.Schema.Types.ObjectId, ref: 'Classe' } ,
  state: String,
  dependence: String,
  code_postale: String,
  adress_ar: String,
  adress_fr: String,
  num_phone: String,
  email: String,
  nom_pere: String,
  job_pere: String,
  nom_mere: String,
  num_phone_tuteur: String,
  moyen: String,
  session: String,
  filiere: String,
  niveau_scolaire: String,
  annee_scolaire: String,
  type_inscription: { type: mongoose.Schema.Types.ObjectId, ref: 'TypeInscriptionEtudiant' },
  files: [{
    type:String,
    fileName: String

  }]
}, { timestamps: true });

module.exports = mongoose.model('Etudiant', etudiantSchema);