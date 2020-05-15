//Importing models
const db = require("../database/models");

// Defining methods for the SeedCompaniessController
module.exports = {
	findAll: function (req, res) {
		db.masterInventory.find(req.query)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	findOne: function (req, res) {
		db.masterInventory.find({plant_name: req.body.plant_name, variety: req.body.variety, seed_seller: req.body.seed_seller})
		.then((dbModel) => res.json(dbModel))
		.catch((err) => res.json(err));
	},
	findById: function (req, res) {
		db.masterInventory.find({ _id: req.params.id })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	create: function (req, res) {
		db.masterInventory.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	update: function (req, res) {
		db.masterInventory.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	remove: function (req, res) {
		db.masterInventory.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
};
