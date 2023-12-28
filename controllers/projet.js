const express = require('express');
const app = express();

// Assigning users to the variable User
const Project = require('../models/projet');

const allProject = async (req, res) => {
    Project.findAll().then(result => {
        res.send(result);
    })
}

const saveProject = async (req, res) => {
    Project.create({
        name : req.body.name,
        description : req.body.description,
        icon  :req.body.icon,
        status : req.body.status,
    });
}

const updateProject = async (req, res, dataProject) => {
    Project.update(dataProject);
}

// const deleteProject = async (req, res, dataProject) => {
//     Project.delete(dataProject);
// }

module.exports = {
    allProject,
    saveProject,
    updateProject,
};