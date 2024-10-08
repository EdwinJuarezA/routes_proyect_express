const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');
const Clientes = require('./clientes.model');
const Mesas = require('./mesas.model');

class Pedidos extends Model{}

Pedidos.init({
  PedidoID:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  ClienteID:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Clientes, 
      key: 'ClienteID',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  MesaID:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Mesas, 
      key: 'MesaID',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  FechaHora:{
    type:DataTypes.TIME,

  },
  Estado: {
    type:DataTypes.ENUM('Fila,Preparacion,Listo,Entregado,Finalizado'),
    allowNull:false,
  }
},{
  sequelize,
  modelName:"Mesas",
});

module.exports = Mesas;