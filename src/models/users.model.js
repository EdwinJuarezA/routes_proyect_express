const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Usuarios = sequelize.define('Usuarios', {
  idUsuarios: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  usuario: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Usuarios;
