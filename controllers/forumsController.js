//Importing models
const db = require("../database/models");

// Defining methods for the ForumsController
module.exports = {
	findAll: function (req, res) {
		db.Forums.find(req.query)
			.sort({ created_at: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	findById: function (req, res) {
		db.Forums.find({ _id: req.params.id })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	create: function (req, res) {
		db.Forums.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	update: function (req, res) {
		db.Forums.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	remove: function (req, res) {
		db.Forums.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
};
