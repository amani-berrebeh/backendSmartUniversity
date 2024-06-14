const studentEtatDao = require('../../dao/studentDao/studentEtatDao');

class studentEtatService {
  async getAllStudentEtat() {
    return await studentEtatDao.findAllStudentEtat();
  }

  async createStudentEtat(studentEtat) {
    
    return await studentEtatDao.createStudentEtat(studentEtat);
  }
}

module.exports = new studentEtatService();