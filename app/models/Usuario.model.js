const { DataTypes } = require('sequelize');
const sequelize = require("../database/config.js");

const Usuario = sequelize.define('Usuario', {
  // Model attributes are defined here
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
}, {
  tableName: "Usuarios",
  timestamps:false
});

module.exports = Usuario;