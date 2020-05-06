const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define userSchema
const SeedCompanySchema = new Schema({

	name: { type: String, unique: false, required: false },
	address: { type: String, unique: false, required: false },
	zip: { type: Number, unique: false, required: false },
	hours: { type: String, unique: false, required: false },
	phone: { type: String, unique: false, required: false },
	website: { type: String, unique: false, required: false },
	google_rating: { type: Number, unique: false, required: false }
})

const SeedCompanies = mongoose.model('SeedCompany', SeedCompanySchema);

module.exports = SeedCompanies;
