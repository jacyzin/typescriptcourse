'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var config = require('../config/env/config')();
var env = config.env || 'development';
var db: any = {};

if (config.dbURL) {
  var sequelize = new Sequelize(config.dbURL);
} else {
  var sequelize = new Sequelize(config.db, config.username, config.password);
}
console.log(__dirname)
fs
  .readdirSync(__dirname)
  .filter(function (file) {
    let extension = '.js'
    if (process.env.NODE_ENV == 'development') extension = '.ts'
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === `${extension}`);
  })
  .forEach(function (file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado com banco de dados.');
  })
  .catch(err => {
    console.error('Falha ao conectar com banco de dados:', err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;