'use strict'

require('dotenv/config');
const connectionString = process.env.CONNECTION_STRING;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(connectionString);

/**Criação da conexão e autenticação  */
sequelize
    .authenticate()
    .then(function () {
        console.log('Conexão à base de dados realizada com sucesso!');
    })
    .catch(function (erro) {
        console.log('Falha ao se conectar à base de dados: ' + erro);
    });

module.exports = sequelize;