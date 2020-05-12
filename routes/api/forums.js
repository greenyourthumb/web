// Dependencies
const router = require("express").Router();
const forumsController = require("../../controllers/forumsController");

// Matches with "/api/items"
router.route("/").get(forumsController.findAll).post(forumsController.create);

// Matches with "/api/items/:id"
router
	.route("/:id")
	.get(forumsController.findById)
	.put(forumsController.update)
	.delete(forumsController.remove);

// Exporting
module.exports = router;
