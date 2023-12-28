const { Sequelize, DataTypes } = require('sequelize');

const db = require('../connexion');

const Tache = db.define('tache', {

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
});

Tache.sync().then(() => {
  console.log('table tache created');
});
module.exports = Tache;
