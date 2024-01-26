const express = require('express');
const app = express();

// Assigning users to the variable User
const User = require('../models/user');
const Task = require('../models/task');
const Subtask = require('../models/subtask');

const allTache = async (req, res) => {
    Task.findAll().then(result => {
        res.send(result);
    })
}

const allTacheByIdProject = async (req, res) => {

    let id = req.params.projet_id

    Task.findAll({
        include: [{ model: User},{ model: Subtask}],
        where : {
            projet_id : id
        }
    }).then(result => {
        res.send(result);
    })
}

const allTacheByStatus = async (req, res) => {
    Task.findAll({
        where : {
            status : req.params.status
        }
    }).then(result => {
        res.send(result);
    })
}

const updateTache = async (req, res) => {

    Task.update({ status: req.params.status }, {
        where: {
            id : req.params.id_tache
        }
      });

}

const startTache = async (req, res) => {

    Task.update({ startedAt: req.params.startedAt }, {
        where: {
            id : req.params.id_tache
        }
      });

}

const terminateTache = async (req, res) => {

    Task.update({ terminatedAt: req.params.terminatedAt }, {
        where: {
            id : req.params.id_tache
        }
      });

}


const deliveryTache = async (req, res) => {

    Task.update({ deliveredAt: req.params.deliveredAt }, {
        where: {
            id : req.params.id_tache
        }
      });

}

const getTacheById = async (req, res) => {
    Task.findOne({
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

const saveTache = async (req, res) => {
    // console.log(req.body);
    let id_projet = req.params.project_id

    // res.redirect(`/projet?id=${id_projet}`);

    Task.create({
        name : req.body.name,
        description : req.body.description,
        manager_id  : req.body.manager,
        projet_id : id_projet,
        user_id : req.body.user,
        estimation : req.body.estimation,
        priorite : req.body.priorite,
        status : req.body.status,
    }).then(result=>{
        res.redirect(`/project?id=${id_projet}`);
    });

}

module.exports = {
    allTache,
    allTacheByIdProject,
    allTacheByStatus,
    updateTache,
    getTacheById,
    saveTache,
    startTache,
    terminateTache,
    deliveryTache,
};