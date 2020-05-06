const express = require('express')
const router = express.Router()
const SeedCompanies = require('../../database/models/seedCompanies')

router.get('/seed-companies', (req,res) => {
    
    SeedCompanies.find({})
			.then((dbModel) => res.send(dbModel))
			.catch((err) => res.json(err));
})

module.exports = router