//Importing models
const db = require("../database/models");

// Defining methods for the PostsController
module.exports = {
	findAll: function (req, res) {
		db.Posts.find({ topic_id: "5eb4e6750aa05f430d6e37da" })
			.sort({ created_at: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	findById: function (req, res) {
		db.Posts.find({ _id: req.params.id })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	create: function (req, res) {
		db.Posts.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	update: function (req, res) {
		db.Posts.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	remove: function (req, res) {
		db.Posts.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
};
