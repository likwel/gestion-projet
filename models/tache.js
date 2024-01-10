const { Sequelize, DataTypes } = require('sequelize');

const db = require('../connexion');
const User = require('../models/equipe');

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

User.hasMany(Tache, {foreignKey: 'user_id'})
Tache.belongsTo(User, {foreignKey: 'user_id'})

Tache.sync().then(() => {
  console.log('table tache created');
});
module.exports = Tache;
