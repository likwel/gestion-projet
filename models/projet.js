const { Sequelize, DataTypes } = require('sequelize');

const db = require('../connexion');

const Project = db.define('projet', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status : {
        type: DataTypes.INTEGER,
        allowNull: true
    },
});

Project.sync().then(() => {
  console.log('table projet created');
});
module.exports = Project;
