const pool = require('../../config/database');

class StudentEtatDAO {
  async findAllStudentEtat() {
    const [rows] = await pool.query('SELECT * FROM etudiant_etat');
    return rows;
  }

  async createStudentEtat(studentEtat) {
    const { value, Etat_ar, Etat_fr } = studentEtat;
    const [result] = await pool.query(
      'INSERT INTO etudiant_etat (value, Etat_ar, Etat_fr) VALUES (?, ?, ?)',
      [value, Etat_ar, Etat_fr ]
    );
    return { id: result.insertId, ...studentEtat };
  }

  // async deleteStudentEtatById(id) {
  //   const [result] = await pool.query('DELETE FROM etudiant_etat WHERE id = ?', [id]);
  //   return result.affectedRows > 0; // Returns true if a row was deleted, false otherwise
  // }
}

module.exports = new StudentEtatDAO();