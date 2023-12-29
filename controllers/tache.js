const express = require('express');
const app = express();

// Assigning users to the variable User
const Tache = require('../models/tache');

const allTache = async (req, res) => {
    Tache.findAll().then(result => {
        res.send(result);
    })
}

const allTacheByIdProject = async (req, res) => {

    let id = req.params.projet_id

    Tache.findAll({
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

const getTacheById = async (req, res) => {
    Tache.findOne({
        where : {
            id : req.params.id
        }
    }).then(result => {
        res.send(result);
    })
}

// const saveProject = async (req, res) => {
//     Project.create({
//         name : req.body.name,
//         description : req.body.description,
//         icon  :req.body.icon,
//         status : req.body.status,
//     });
// }

// const updateProject = async (req, res, dataProject) => {
//     Project.update(dataProject);
// }

// const deleteProject = async (req, res, dataProject) => {
//     Project.delete(dataProject);
// }

module.exports = {
    allTache,
    allTacheByIdProject,
    allTacheByStatus,
    updateTache,
    getTacheById,
};