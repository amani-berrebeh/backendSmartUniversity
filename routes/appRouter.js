const Router = require("express");
const router = new Router();

const eventRoutes = require("./eventRoutes/eventRoutes");
const userPermissionsRoutes = require("./userPermissionsRoutes/userPermissionsRoute");
const userRoutes = require("./userRoutes/userRoute");
const userRoleRoutes = require("./userRoutes/userRoleRoute");

router.use("/event", eventRoutes);
router.use("/user-permissions", userPermissionsRoutes);
router.use("/user", userRoutes);
router.use("/user-role", userRoleRoutes);


module.exports = router;