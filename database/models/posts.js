const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define userSchema
const PostsSchema = new Schema({

	content: { type: String, unique: false, required: false },
	created_by: { type: String, unique: false, required: false },
	created_at: { type: Date, default: Date.now },
	topic_id: { type: String, unique: true },
    up_votes: { type: Number, default: 0 },
    down_votes: { type: Number, default: 0 }
})

const Posts = mongoose.model('Posts', PostsSchema);

module.exports = Posts;
