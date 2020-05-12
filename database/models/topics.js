const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define userSchema
const TopicsSchema = new Schema({

	title: { type: String, unique: false, required: false },
	summary: { type: String, unique: false, required: false },
	created_by: { type: String, unique: false, required: false },
	created_at: { type: Date, default: Date.now },
	members_count: { type: Number, default: 1 },
	posts_count: { type: Number, default: 0 },
	forum_id: { type: String, unique: true }
})

const Topics = mongoose.model('Topics', TopicsSchema);

module.exports = Topics;
