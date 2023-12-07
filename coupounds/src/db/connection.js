const Sequelize = require('sequelize');

const sequelize = new Sequelize('nuvertOS', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});


module.exports = sequelize;