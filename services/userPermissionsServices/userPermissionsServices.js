const UserPermissionsDao = require('../../dao/userPermissions/userPermissionsDao');

class UserPermissionService {
  async getAllPermissionsByUserId(id) {
    return await UserPermissionsDao.findAll(id);
  }

  async assignUserPermissions(id, permissions) {
    console.log("service",id)
    console.log("service",permissions)
    return await UserPermissionsDao.assignUserPermissions(id, permissions);
  }
}

module.exports = new UserPermissionService();