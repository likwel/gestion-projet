const express = require('express');
const app = express();

// Assigning users to the variable User
const SousTache = require('../models/subtask');
const User = require('../models/equipe');
const Task = require('../models/tache');

const allSubTache = async (req, res) => {
    SousTache.findAll().then(result => {
        res.send(result);
    })
}

const allSubTacheByIdProject = async (req, res) => {

    let id = req.params.projet_id

    SousTache.findAll({
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

    SousTache.findAll({
        include: [{ model: Task}, { model: User}],
        where : {
            task_id : id
        }
    }).then(result => {
        res.send(result);
    })
}

const allSubTacheByStatus = async (req, res) => {
    SousTache.findAll({
        where : {
            status : req.params.status
        }
    }).then(result => {
        res.send(result);
    })
}

const updateSubTache = async (req, res) => {

    SousTache.update({ status: req.params.status }, {
        where: {
            id : req.params.id_tache
        }
      });

}

const startSubTache = async (req, res) => {

    SousTache.update({ startedAt: req.params.startedAt }, {
        where: {
            id : req.params.id_tache
        }
      });

}

const terminateSubTache = async (req, res) => {

    SousTache.update({ terminatedAt: req.params.terminatedAt }, {
        where: {
            id : req.params.id_tache
        }
      });

}


const deliverySubTache = async (req, res) => {

    SousTache.update({ deliveredAt: req.params.deliveredAt }, {
        where: {
            id : req.params.id_tache
        }
      });

}

const getSubTacheById = async (req, res) => {
    SousTache.findOne({
        include: { model: User},
        where : {
            id : req.params.id
        }
    }).then(result => {
        res.send(result);
    })
}

const saveSubTache = async (req, res) => {
    // console.log(req.body);
    let id_projet = req.params.project_id
    let id_task = req.params.task_id

    // res.redirect(`/projet?id=${id_projet}`);

    SousTache.create({
        name : req.body.name,
        description : req.body.description,
        manager_id  : req.body.manager,
        projet_id : id_projet,
        task_id : id_task,
        user_id : req.body.user,
        estimation : req.body.estimation,
        priorite : req.body.priorite,
        task_level : req.body.level,
        status : req.body.status,
    }).then(result=>{
        res.redirect(`/projet?id=${id_projet}&task_id=${id_task}`);
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