// Dependencies
const router = require("express").Router();
const remindersController = require("../../controllers/reminderController");

// Matches with "/api/items"
router.route("/").get(remindersController.findAll).post(remindersController.create);

// Matches with "/api/items/:id"
router
	.route("/:id")
	.get(remindersController.findById)
	.put(remindersController.update)
	.delete(remindersController.remove);

router.route("/high").get(remindersController.findAlerts);

// Exporting
module.exports = router;
