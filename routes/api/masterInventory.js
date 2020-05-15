// Dependencies
const router = require("express").Router();
const masterInventory = require("../../controllers/masterInventory");

// Matches with "/api/items"
router.route("/").get(masterInventory.findAll).post(masterInventory.create);

// Matches with "/api/items/:id"
router
	.route("/:id")
	.get(masterInventory.findById)
	.put(masterInventory.update)
	.delete(masterInventory.remove);

	router.route("/find").post(masterInventory.findOne);
// Exporting
module.exports = router;
