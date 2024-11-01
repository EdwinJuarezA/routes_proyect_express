const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');


class Clientes extends Model { }

Clientes.init({
  ClienteID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false //no null
  },
  Correo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Telefono: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Comentarios: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: "Clientes",
});

module.exports = Clientes;