const User = require('../database/models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'user_email', // not necessary, DEFAULT
		passwordField: 'user_pass' // not necessary, DEFAULT
	},
	function(user_email, user_pass, done) {
		User.findOne({ userName: user_email }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(user_pass)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
)

module.exports = strategy
