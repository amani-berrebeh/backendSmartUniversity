const express = require('express');
const router = express.Router();
const userPermissionsController = require('../../controllers/userPermissionsControllers/userPermissionsController');

router.post('/get-all-user-permissions', userPermissionsController.getAllPermissionsByUserId);
router.post('/assign-user-permissions', userPermissionsController.assignUserPermissions);

module.exports = router;
