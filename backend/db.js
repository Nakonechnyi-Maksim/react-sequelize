const { Sequelize } = require("sequelize");
require("dotenv").config();
const DB_PORT = process.env.PORT;
const DB = process.env.DB;
const LOGIN = process.env.LOGIN;
const PASSWORD = process.env.PASSWORD;

module.exports = new Sequelize(DB, LOGIN, PASSWORD, {
  host: "host.docker.internal",
  port: DB_PORT,
  dialect: "postgres",
});
