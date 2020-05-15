//Dependencies
const router = require("express").Router();
const userRoutes = require("./user");
const resourceRoutes = require("./seedCompanies");
const forumRoutes = require("./forums");
const topicRoutes = require("./topics");
const postRoutes = require("./posts");
const growListRouter = require("./growlist");
const masterInventoryRouter = require("./masterInventory");

// API Routes
router.use("/user", userRoutes);
router.use("/resources", resourceRoutes);
router.use("/forums", forumRoutes);
router.use("/topics", topicRoutes);
router.use("/posts", postRoutes);
router.use("/growlist", growListRouter);
router.use("/masterInventory", masterInventoryRouter);


module.exports = router;