// Dependencies
const router = require("express").Router();
const PostsController = require("../../controllers/postsController");

// Matches with "/api/items"
router.route("/").get(PostsController.findAll).post(PostsController.create);

// Matches with "/api/items/:id"
router
	.route("/:id")
	.get(PostsController.findById)
	.put(PostsController.update)
	.delete(PostsController.remove);

// Exporting
module.exports = router;
