const { Sequelize, DataTypes } = require('sequelize');

const db = require('../connexion');
const User = require('./user');
const Task = require('./task');

const Subtask = db.define('subtask', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    manager_id : {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    projet_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    task_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    estimation: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    status : {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    priorite : {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    startedAt : {
        type: DataTypes.DATE,
        allowNull: true,
    },
    terminatedAt : {
        type: DataTypes.DATE,
        allowNull: true,
    },
    deliveredAt : {
        type: DataTypes.DATE,
        allowNull: true,
    },
    
});

User.hasMany(Subtask, {foreignKey: 'user_id'})
Subtask.belongsTo(User, {foreignKey: 'user_id'})

// Task.hasMany(Subtask, {foreignKey: 'task_id'})
// Subtask.belongsTo(Task, {foreignKey: 'task_id'})

Subtask.sync().then(() => {
  console.log('table sous-tache created');
});
module.exports = Subtask;
