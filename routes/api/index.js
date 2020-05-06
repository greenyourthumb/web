//Dependencies
const router = require("express").Router();
const userRoutes = require("./user");
const resourceRoutes = require("./seedCompanies");

// API Routes
router.use("/user", userRoutes);
router.use("/resources", resourceRoutes);

module.exports = router;