const { DataTypes } = require('sequelize');
const sequelize = require("../database/config.js");

const Direccion = sequelize.define('Direccion', {
  // Model attributes are defined here
  calle: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  numeracion: {
    type: DataTypes.STRING(15),
    allowNull: false,
    defaultValue: "Sin número"
  },
  comuna: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  ciudad: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
}, {
  tableName: "Direcciones",
  timestamps:false
});

module.exports = Direccion;