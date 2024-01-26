const { Sequelize } = require('sequelize');

const db = require('../connexion');
// const Task = require('../models/task');

const User = db.define('user', {

    fullname: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    username: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    roles : {
        type: Sequelize.TEXT,
        allowNull: false
    },
    email: {
        type: Sequelize.TEXT,
        unique: true,
        isEmail: true, //checks for email format
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    photo: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    // salary : {
    //     type: Sequelize.TEXT,
    //     allowNull: true
    // },
});
User.sync().then(() => {
  console.log('table user created');
});
module.exports = User;
