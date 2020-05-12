const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define userSchema
const ForumsSchema = new Schema({

	name: { type: String, unique: false, required: false },
	summary: { type: String, unique: false, required: false },
	created_by: { type: String, unique: false, required: false },
	created_at: { type: Date, default: Date.now },
	topics_count: { type: Number, default: 0 },
	posts_count: { type: Number, default: 0 }
})

const Forums = mongoose.model('Forums', ForumsSchema);

module.exports = Forums;
