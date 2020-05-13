// Dependencies
const router = require("express").Router();
const TopicsController = require("../../controllers/topicsController");

// Matches with "/api/items"
router.route("/").get(TopicsController.findAll).post(TopicsController.create);

// Matches with "/api/items/:id"
router
	.route("/:id")
	.get(TopicsController.findById)
	.put(TopicsController.update)
	.delete(TopicsController.remove);

// Exporting
module.exports = router;
