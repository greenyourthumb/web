const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define Schema
const masterInventorySchema = new Schema({

	plant_name: { type: String, unique: false, required: false },
	variety: { type: String, unique: false, required: false },
	seed_seller: { type: String, unique: false, required: false },
	sprouts_in: { type: String, unique: false, required: false },
	ideal_temp: { type: String, unique: false, required: false },
	seed_depth: { type: String, unique: false, required: false },
    plant_spacing: { type: String, unique: false, required: false },
    row_spacing: { type: String, unique: false, required: false },
	min_full_sun: { type: String, unique: false, required: false },
	frost_hardy: { type: String, unique: false, required: false },
	soil_type: { type: String, unique: false, required: false },
	moisture_level: { type: String, unique: false, required: false },
    ideal_ph: { type: String, unique: false, required: false },
    link: {type: String, unique: false, required: false}
})

const masterInventory = mongoose.model('masterInventory', masterInventorySchema);

module.exports = masterInventory;
												