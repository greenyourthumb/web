//Importing models
const db = require("../database/models");

// Defining methods for the SeedCompaniessController
module.exports = {
	findAll: function (req, res) {
		db.GrowList.find(req.query)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	findById: function (req, res) {
		db.GrowList.find({ _id: req.params.id })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	create: function (req, res) {
		db.GrowList.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	update: function (req, res) {
		db.GrowList.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	remove: function (req, res) {
		db.GrowList.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
};
