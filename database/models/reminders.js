const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define userSchema
const RemindersSchema = new Schema({

	title: { type: String, unique: false, required: false },
	details: { type: String, unique: false, required: false },
    created_at: { type: Date, default: Date.now },
    priority: { type: String, unique: false, required: false },
    dateSelected: {type: Date, required: false }
})

const Reminders = mongoose.model('Reminders', RemindersSchema);

module.exports = Reminders;
