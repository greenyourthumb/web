// Dependencies
const router = require("express").Router();
const GrowList = require("../../controllers/GrowListController");

// Matches with "/api/items"
router.route("/").get(GrowList.findAll).post(GrowList.create);

// Matches with "/api/items/:id"
router
	.route("/:id")
	.get(GrowList.findById)
	.put(GrowList.update)
	.delete(GrowList.remove);

// Exporting
module.exports = router;
