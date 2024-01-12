//importing modules
const express = require('express')
const userController = require('../controllers/user')
const { signup, login, allUser , getAllManager, getUserById} = userController
const userAuth = require('../middleware/user')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, signup)

//login route
router.post('/login', login )

//view login
router.get('/login', (req, res) => {
    res.render("login")
})

//appel template
router.get('/', (req, res) => {
    res.render('user')
})
router.get('/create', (req, res) => {
    res.render('create-equipe')
})

//view register
router.get('/signup', (req, res) => {
    res.render("signup")
})
//get all users
router.get('/get_all_equipe', allUser)

router.get('/get_all_project_manager', getAllManager)

router.get('/getUserById/:id', getUserById)

module.exports = router