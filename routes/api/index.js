//Dependencies
const router = require("express").Router();
const userRoutes = require("./user");
// API Routes
router.use("/user", userRoutes);

module.exports = router;