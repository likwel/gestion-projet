//importing modules
const express = require('express')
const projetController = require('../controllers/project')
const { allProject, saveProject, updateProject, getProjectById } = projetController
const Task = require('../models/task');
// const userAuth = require('../middleware/equipe')

let allTacheById ="";

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/create', saveProject)

router.post('/update', updateProject)

//login route
router.get('/getAll', allProject)

router.get('/getOneById/:id', getProjectById)

// router.get('/:id', allTacheById)

//view project template
router.get('/', (req, res) => {
    let projet_id = req.query.id

    if(projet_id){
        res.render("task")
    }else{
        res.redirect("/")
    }

})


module.exports = router