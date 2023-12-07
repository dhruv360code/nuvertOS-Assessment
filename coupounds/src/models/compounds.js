
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Compound = sequelize.define('Compound', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },  
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Compound;


