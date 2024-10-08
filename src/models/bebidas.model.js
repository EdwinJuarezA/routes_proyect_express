const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');
const Categorias = require('./Categorias');


class Bebidas extends Model{}

Bebidas.init({
  BebidaID:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  Nombre:{
    type:DataTypes.STRING,
    allowNull: false //no null
  },
  Precio:{
    type:DataTypes.DECIMAL,
    allowNull:false
  },
  CategoriaID:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Categorias, 
      key: 'CategoriaID',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  Stock:{
    type:DataTypes.INTEGER
  }
},{
  sequelize,
  modelName:"Bebidas",
});

module.exports = Bebidas;