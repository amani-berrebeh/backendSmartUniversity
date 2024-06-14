
const pool = require('../../config/database');

class UserPermissionDAO {
  async  findAll(id_user) {
    const [rows] = await pool.query(`
        SELECT permissions.*, users_permissions.id_user
        FROM permissions
        JOIN users_permissions ON permissions.idpermission = users_permissions.id_permission
        WHERE users_permissions.id_user = ?;
    `, [id_user]);
    return rows;
}


  // Affect route to user
  async assignUserPermissions(id, permissions) {
    try {
      console.log(id)
    console.log(permissions)

    const values = permissions.map(permission => [id, permission]);

    const sql = 'INSERT INTO users_permissions (id_user, id_permission) VALUES ?';

    return await pool.query(sql, [values], (err, result) => {
      // if (err) {
      //     console.error('Error executing query:', err);
      //     return { error: 'Internal server error' };
      // }
      
      // return { message: 'Permissions assigned successfully' };
  });
    } catch (error) {
      console.log(error);
    }

    
  }

}

module.exports = new UserPermissionDAO();
