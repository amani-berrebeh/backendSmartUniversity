const pool = require("../../config/database");
const bcrypt = require("bcryptjs");

class StudentDAO {
  async findAllStudents() {
    const [rows] = await pool.query("SELECT * FROM students");
    return rows;
  }

  async createStudent(user) {
    const {
      type_inscription,
      matricule,
      diplome,
      filiere,
      nationalite,
      cin,
      passport,
      nom,
      prenom,
      nom_ar,
      prenom_ar,
      full_name,
      genre,
      ddn,
      lieu_naissance,
      gov,
      municipality,
      etat_civil,
      annee_bac,
      session_bac,
      section_bac,
      moyenne_bac,
      rue_etudiant,
      rue_etudiant_ar,
      codepostal_etudiant,
      tel1_etudiant,
      tel2_etudiant,
      prenom_pere,
      profession_pere,
      prenom_mere,
      email,
      password,
      classe_id,
      active,
      profile_image,
      cin_file,
      cin_file_2,
      paiement_file,
      qrcode,
      verify,
      derniere_relevee_file,
      mutation_file,
      sortie_file,
      reorientation_file,
      reintegration_file,
      demande_ecrit_file,
      recu_paiement_file,
    } = user;

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      `INSERT INTO users (type_inscription,
      matricule,
      diplome,
      filiere,
      nationalite,
      cin,
      passport,
      nom,
      prenom,
      nom_ar,
      prenom_ar,
      full_name,
      genre,
      ddn,
      lieu_naissance,
      gov,
      municipality,
      etat_civil,
      annee_bac,
      session_bac,
      section_bac,
      moyenne_bac,
      rue_etudiant,
      rue_etudiant_ar,
      codepostal_etudiant,
      tel1_etudiant,
      tel2_etudiant,
      prenom_pere,
      profession_pere,
      prenom_mere,
      email,
      password,
      classe_id,
      active,
      profile_image,
      cin_file,
      cin_file_2,
      paiement_file,
      qrcode,
      verify,
      derniere_relevee_file,
      mutation_file,
      sortie_file,
      reorientation_file,
      reintegration_file,
      demande_ecrit_file,
      recu_paiement_file) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?)`,
      [
        type_inscription,
        matricule,
        diplome,
        filiere,
        nationalite,
        cin,
        passport,
        nom,
        prenom,
        nom_ar,
        prenom_ar,
        full_name,
        genre,
        ddn,
        lieu_naissance,
        gov,
        municipality,
        etat_civil,
        annee_bac,
        session_bac,
        section_bac,
        moyenne_bac,
        rue_etudiant,
        rue_etudiant_ar,
        codepostal_etudiant,
        tel1_etudiant,
        tel2_etudiant,
        prenom_pere,
        profession_pere,
        prenom_mere,
        email,
        password,
        classe_id,
        active,
        profile_image,
        cin_file,
        cin_file_2,
        paiement_file,
        qrcode,
        verify,
        derniere_relevee_file,
        mutation_file,
        sortie_file,
        reorientation_file,
        reintegration_file,
        demande_ecrit_file,
        recu_paiement_file,
      ]
    );
    return { id: result.insertId, ...user };
  }

  async findByUseremail(email) {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0];
  }

  async updateApiToken(id, token) {
    await pool.query(
      `UPDATE users SET api_token = '${token}' WHERE id = ${id}`
    );
    const [rows] = await pool.query(`SELECT * FROM users WHERE id = ${id} `);
    return rows[0];
  }

  async updateUser(user) {
    console.log(user);
    await pool.query(
      `UPDATE users SET name = '${user.name}', email = '${user.email}', role = '${user.role}', departement_id = ${user.departement_id}, app_name = '${user.app_name}' WHERE id = ${user.id}`
    );
    const [rows] = await pool.query(
      `SELECT * FROM users WHERE id = ${user.id} `
    );
    return rows[0];
  }
}

module.exports = new StudentDAO();
