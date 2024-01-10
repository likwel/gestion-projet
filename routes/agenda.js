//importing modules
const express = require('express')
const agendaController = require('../Controllers/agenda')
const { index} = agendaController
// const userAuth = require('../middleware/equipe')

// let allTacheById ="";

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.get('/', index)

// router.get('/agenda/:id', getTacheById)


module.exports = router