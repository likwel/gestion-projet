const { Sequelize, DataTypes } = require('sequelize');

const db = require('../connexion');
const User = require('./user');
const SubTask = require('./subtask');

const Task = db.define('task', {

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

User.hasMany(Task, {foreignKey: 'user_id'})
Task.belongsTo(User, {foreignKey: 'user_id'})

Task.hasMany(SubTask, {foreignKey: 'task_id'})
SubTask.belongsTo(Task, {foreignKey: 'task_id'})

Task.sync().then(() => {
  console.log('table tache created');
});
module.exports = Task;
