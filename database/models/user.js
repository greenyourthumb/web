const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({

	firstName: { type: String, unique: false, required: false },
	lastName: { type: String, unique: false, required: false },
	userName: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false },
	zipCode: { type: Number, unique: false, required: false }
})

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model('User', userSchema);

module.exports = User;










// // Dependencies
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// //Generating Schema
// const itemSchema = new Schema({
// 	note: { type: String, required: true },
// 	author: { type: String, required: true },
// 	date: { type: Date, default: Date.now },
// });

// //Setting schema to variable
// const Item = mongoose.model("Item", itemSchema);

// //Exporting
// module.exports = Item;


