
const pool = require('../../config/database');
const bcrypt = require("bcryptjs");

class UserDAO {
  async findAllUsers() {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
  }

  async createUser(user) {
    const { name, email, lockout_time,role, departement_id, password, app_name, role_id} = user;

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      'INSERT INTO users (name, email, lockout_time,role, departement_id, password, app_name, role_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [name, email, lockout_time,role, departement_id, hashedPassword, app_name, role_id]
    );
    return { id: result.insertId, ...user };
  }

  async findByUseremail(email) {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  }

  async findUserByToken(api_token) {
    console.log(`Finding user by token dao: ${api_token}`);
    const [rows] = await pool.query('SELECT * FROM users WHERE api_token = ?', [api_token]);
    console.log(`User found: ${JSON.stringify(rows[0])}`);
    return rows[0];
  }

  async updateApiToken(userId, apiToken) {
    console.log(`Updating user id dao: ${userId} with token: ${apiToken}`);
    const [result] = await pool.query('UPDATE users SET api_token = ? WHERE id = ?', [apiToken, userId]);
    return result;
  }

  async updateUser(user) {
    console.log(user)
    await pool.query(`UPDATE users SET name = '${user.name}', email = '${user.email}', role = '${user.role}', departement_id = ${user.departement_id}, app_name = '${user.app_name}' WHERE id = ${user.id}`);
    const [rows]  = await pool.query(`SELECT * FROM users WHERE id = ${user.id} `);
    return rows[0];
  }
}



module.exports = new UserDAO();
