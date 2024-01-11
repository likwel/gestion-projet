const express = require('express');
const app = express();

// Assigning users to the variable User
const Tache = require('../models/tache');
const User = require('../models/equipe');

const allTache = async (req, res) => {
    Tache.findAll().then(result => {
        res.send(result);
    })
}

const allTacheByIdProject = async (req, res) => {

    let id = req.params.projet_id

    Tache.findAll({
        include: { model: User},
        where : {
            projet_id : id
        }
    }).then(result => {
        res.send(result);
    })
}

const allTacheByStatus = async (req, res) => {
    Tache.findAll({
        where : {
            status : req.params.status
        }
    }).then(result => {
        res.send(result);
    })
}

const updateTache = async (req, res) => {

    Tache.update({ status: req.params.status }, {
        where: {
            id : req.params.id_tache
        }
      });

}

const startTache = async (req, res) => {

    Tache.update({ startedAt: req.params.startedAt }, {
        where: {
            id : req.params.id_tache
        }
      });

}

const terminateTache = async (req, res) => {

    Tache.update({ terminatedAt: req.params.terminatedAt }, {
        where: {
            id : req.params.id_tache
        }
      });

}


const deliveryTache = async (req, res) => {

    Tache.update({ deliveredAt: req.params.deliveredAt }, {
        where: {
            id : req.params.id_tache
        }
      });

}

const getTacheById = async (req, res) => {
    Tache.findOne({
        include: { model: User},
        where : {
            id : req.params.id
        }
    }).then(result => {
        res.send(result);
    })
}

const saveTache = async (req, res) => {
    // console.log(req.body);
    let id_projet = req.params.project_id

    // res.redirect(`/projet?id=${id_projet}`);

    Tache.create({
        name : req.body.name,
        description : req.body.description,
        manager_id  : req.body.manager,
        projet_id : id_projet,
        user_id : req.body.user,
        estimation : req.body.estimation,
        priorite : req.body.priorite,
        status : req.body.status,
    }).then(result=>{
        res.redirect(`/projet?id=${id_projet}`);
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