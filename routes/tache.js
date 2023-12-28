//importing modules
const express = require('express')
const tacheController = require('../Controllers/tache')
const { allTache, allTacheByIdProject, allTacheByStatus } = tacheController
// const userAuth = require('../middleware/equipe')

let allTacheById ="";

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
// router.post('/create', saveProject)

router.get('/getAllByProjectId/:projet_id', allTacheByIdProject)

router.get('/tache/status/:status', allTacheByStatus)

//login route
router.get('/getAllTache', allTache)

// router.get('/:id', allTacheById)

// //view login
// router.get('/', (req, res) => {
//     res.render("login")
// })

// //appel template
// router.get('/liste', (req, res) => {
//     res.render('equipe')
// })
// router.get('/create', (req, res) => {
//     res.render('create-equipe')
// })

// //view register
// router.get('/signup', (req, res) => {
//     res.render("signup")
// })
// //get all users
// router.get('/get_all_equipe', allUser)

module.exports = router