const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');
const Bebidas = require('../models/bebidas.model');

class Categorias extends Model{}

Categorias.init({
  CategoriaID:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  Nombre:{
    type:DataTypes.STRING,
    allowNull: false //no null
  }
},{
  sequelize,
  modelName:"Categorias",
});

module.exports = Categorias;