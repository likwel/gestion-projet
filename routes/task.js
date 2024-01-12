//importing modules
const express = require('express')
const tacheController = require('../controllers/task')
const { allTache, allTacheByIdProject, allTacheByStatus, updateTache,getTacheById , saveTache, startTache,
    terminateTache, deliveryTache} = tacheController
// const userAuth = require('../middleware/equipe')

let allTacheById ="";

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/update/:id_tache/:status', updateTache)

router.post('/start/:id_tache/:startedAt', startTache)

router.post('/terminate/:id_tache/:terminatedAt', terminateTache)

router.post('/delivery/:id_tache/:deliveredAt', deliveryTache)

router.get('/task/getById/:id', getTacheById)

router.get('/getAllByProjectId/:projet_id', allTacheByIdProject)

router.get('/tache/status/:status', allTacheByStatus)

//login route
router.get('/getAllTache', allTache)

router.post('/task/create/:project_id', saveTache)

router.get('/task', (req, res) => {
    let projet_id = req.query.id

    if(projet_id){
        res.render("subtask")
    }else{
        res.redirect("/")
    }

})


module.exports = router