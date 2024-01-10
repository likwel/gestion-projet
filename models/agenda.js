const { Sequelize, DataTypes } = require('sequelize');

const db = require('../connexion');

const Agenda = db.define('agenda', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status : {
        type: DataTypes.INTEGER,
        allowNull: true
    },
});

Agenda.sync().then(() => {
  console.log('table agenda created');
});
module.exports = Agenda;
