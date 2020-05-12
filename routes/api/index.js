//Dependencies
const router = require("express").Router();
const userRoutes = require("./user");
const resourceRoutes = require("./seedCompanies");
const forumRoutes = require("./forums");
const topicRoutes = require("./topics");
const postRoutes = require("./posts");

// API Routes
router.use("/user", userRoutes);
router.use("/resources", resourceRoutes);
router.use("/forums", forumRoutes);
router.use("/topics", topicRoutes);
router.use("/posts", postRoutes);

module.exports = router;