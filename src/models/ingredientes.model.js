const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');


class Ingredientes extends Model{}

Ingredientes.init({
  ClienteID:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  Nombre:{
    type:DataTypes.STRING,
    allowNull: false //no null
  },
  Correo:{
    type:DataTypes.STRING,
    allowNull:false
  },
  Telefono:{
    type:DataTypes.STRING,
    allowNull:false
  },
  Comentarios:{
    type:DataTypes.STRING
  }
},{
  sequelize,
  modelName:"Clientes",
});

module.exports = Clientes;