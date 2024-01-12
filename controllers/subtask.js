const express = require('express');
const app = express();

// Assigning users to the variable User
const Subtask = require('../models/subtask');
const User = require('../models/user');
const Task = require('../models/task');

const allSubTache = async (req, res) => {
    Subtask.findAll().then(result => {
        res.send(result);
    })
}

const allSubTacheByIdProject = async (req, res) => {

    let id = req.params.projet_id

    Subtask.findAll({
        include: [{ model: Task}, { model: User}],
        where : {
            projet_id : id
        }
    }).then(result => {
        res.send(result);
    })
}

const allSubTacheByIdTache = async (req, res) => {

    let id = req.params.task_id

    Subtask.findAll({
        include: [{ model: Task}, { model: User}],
        where : {
            task_id : id
        }
    }).then(result => {
        if(result){
            res.send(result);
        }else{
            res.send(false);
        }
        
    })
}

const allSubTacheByStatus = async (req, res) => {
    Subtask.findAll({
        where : {
            status : req.params.status
        }
    }).then(result => {
        res.send(result);
    })
}

const updateSubTache = async (req, res) => {

    Subtask.update({ status: req.params.status }, {
        where: {
            id : req.params.id_tache
        }
      });

}

const startSubTache = async (req, res) => {

    Subtask.update({ startedAt: req.params.startedAt }, {
        where: {
            id : req.params.id_tache
        }
      });

}

const terminateSubTache = async (req, res) => {

    Subtask.update({ terminatedAt: req.params.terminatedAt }, {
        where: {
            id : req.params.id_tache
        }
      });

}


const deliverySubTache = async (req, res) => {

    Subtask.update({ deliveredAt: req.params.deliveredAt }, {
        where: {
            id : req.params.id_tache
        }
      });

}

const getSubTacheById = async (req, res) => {
    Subtask.findOne({
        include: { model: User},
        where : {
            id : req.params.id
        }
    }).then(result => {
        if(result){
            res.send(result);
        }else{
            res.send(false)
        }
        
    })
}

const saveSubTache = async (req, res) => {
    // console.log(req.body);
    let id_projet = req.params.project_id
    let id_task = req.params.task_id

    // res.redirect(`/projet?id=${id_projet}`);

    Subtask.create({
        name : req.body.name,
        description : req.body.description,
        manager_id  : req.body.manager,
        projet_id : id_projet,
        task_id : id_task,
        user_id : req.body.user,
        estimation : req.body.estimation,
        priorite : req.body.priorite,
        status : req.body.status,
    }).then(result=>{
        res.redirect(`/project/task?id=${id_task}`);
    });

}

module.exports = {
    allSubTache,
    allSubTacheByIdProject,
    allSubTacheByIdTache,
    allSubTacheByStatus,
    updateSubTache,
    getSubTacheById,
    saveSubTache,
    startSubTache,
    terminateSubTache,
    deliverySubTache,
};