const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User_Card = sequelize.define(
  "card",
  {
    pan: { type: DataTypes.STRING, allowNull: true },
    cvv: { type: DataTypes.STRING, allowNull: true },
    pin: { type: DataTypes.STRING, allowNull: true },
    balance: { type: DataTypes.STRING, allowNull: true },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = User_Card;
