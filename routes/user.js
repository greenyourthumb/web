const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')

router.post('/signup', (req, res) => {
    console.log('user signup');

    const { first_name, last_name, user_email, user_pass, user_zip } = req.body
    // ADD VALIDATION
    User.findOne({ userName: user_email }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${user_email}`
            })
        }
        else {
            const newUser = new User({
                firstName: first_name,
	            lastName: last_name,
	            userName: user_email,
	            password: user_pass,
	            zipCode: user_zip
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                console.log(savedUser);
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            firstName: req.user.firstName
        };
        res.send(userInfo);
    }
)

router.get('/mygreenzone', (req, res, next) => {
    console.log('===== user!!======')
    res.redirect('http://localhost:3000/mygreenzone')
    
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router