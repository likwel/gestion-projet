//importing modules
const express = require('express')
const tacheController = require('../Controllers/subtask')
const { allSubTache, allSubTacheByIdProject,allSubTacheByIdTache, allSubTacheByStatus, updateSubTache,getSubTacheById , saveSubTache, startSubTache,
    terminateSubTache, deliverySubTache} = tacheController
// const userAuth = require('../middleware/equipe')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/update-subtask/:id_tache/:status', updateSubTache)

router.post('/start-subtask/:id_tache/:startedAt', startSubTache)

router.post('/terminate-subtask/:id_tache/:terminatedAt', terminateSubTache)

router.post('/delivery-subtask/:id_tache/:deliveredAt', deliverySubTache)

router.get('/tache-subtask/getById/:id', getSubTacheById)

router.get('/getAllSubTaskByProjectId/:projet_id', allSubTacheByIdProject)

router.get('/getAllSubTaskByTacheId/:task_id', allSubTacheByIdTache)

router.get('/subtask/status/:status', allSubTacheByStatus)

//login route
router.get('/getAllSubTask', allSubTache)

router.post('/subtask/create/:project_id/:task_id', saveSubTache)

module.exports = router