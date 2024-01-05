const { Sequelize } = require('sequelize');

const db = require('../connexion');

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
  console.log('table equipe created');
});
module.exports = User;
