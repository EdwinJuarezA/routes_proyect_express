const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');


class Mesas extends Model{}

Mesas.init({
  MesaID:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  Numero:{
    type:DataTypes.INTEGER,
    allowNull: false //no null
  },
  Estado:{
    type:DataTypes.ENUM('Disponible,Ocupada'),
    allowNull: false,
    defaultValue:'disponible',
  },
},{
  sequelize,
  modelName:"Mesas",
});

module.exports = Mesas;