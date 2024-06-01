const { Sequelize } = require("sequelize");
require("dotenv").config();
const DB_PORT = process.env.PORT;
const USER = process.env.USER;
const LOGIN = process.env.LOGIN;
const PASSWORD = process.env.PASSWORD;

module.exports = new Sequelize(USER, LOGIN, PASSWORD, {
  host: "localhost",
  port: DB_PORT,
  dialect: "postgres",
});
