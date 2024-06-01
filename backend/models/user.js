const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "users",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.STRING, allowNull: false },
    company: { type: DataTypes.STRING, allowNull: true },
    card: { type: DataTypes.STRING, allowNull: true },
    addres: { type: DataTypes.STRING, allowNull: true },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
