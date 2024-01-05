//importing modules
const express = require('express')
const projetController = require('../Controllers/projet')
const { allProject, saveProject, updateProject, getProjectById } = projetController
const Tache = require('../models/tache');
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

// //view login
router.get('/', (req, res) => {
    let projet_id = req.query.id

    // let id = req.params.projet_id


    if(projet_id){
        res.render("tache")
    }else{
        res.redirect("/")
    }

    // if(projet_id){
    //     Tache.findAll({
    //         where : {
    //             projet_id : projet_id
    //         }
    //     }).then(result => {
    //         if(result){
    //             res.render("tache", {
    //                 liste_tache : JSON.stringify(result)
    //             })
    //         }else{
    //             res.send("vide")
    //         }
    //         // res.send(result);
    //     })
    // }else{
    //     res.redirect("/")
    // }

})

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