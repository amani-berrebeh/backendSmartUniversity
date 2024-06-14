const userPermissionsService = require('../../services/userPermissionsServices/userPermissionsServices');

exports.getAllPermissionsByUserId = async (req, res) => {
  try {
    const {id} = req.body;
    const userPermissions = await userPermissionsService.getAllPermissionsByUserId(id);
    res.json(userPermissions);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.assignUserPermissions = async (req, res) => {
  try {
    const { id, permissions } = req.body;
    console.log("controller",id)
    console.log("controller",permissions)

    if (!id || !Array.isArray(permissions) || permissions.length === 0) {
        res.status(400).json({ error: 'Invalid input data' });
      }
      else{
        await userPermissionsService.assignUserPermissions(id, permissions);

        res.status(200).json({ message: 'Permissions assigned successfully' });
      }
    
  } catch (error) {
    res.status(500).send(error.message);
  }
};
