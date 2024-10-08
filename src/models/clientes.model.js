const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/config/database');

const Cliente = sequelize.define('clientes', {
    id: {type: Sequelize.SMALLINT, primaryKey: true},
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    telefono: Sequelize.STRING,
    comentarios:Sequelize.STRING
  })