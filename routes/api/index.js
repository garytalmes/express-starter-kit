const router = require("express").Router()
const otherRoutes = require("./otherRoutes");
const userRoutes = require("./userRoutes");


router.use("/other", otherRoutes);
router.use("/user", userRoutes);


module.exports = router;