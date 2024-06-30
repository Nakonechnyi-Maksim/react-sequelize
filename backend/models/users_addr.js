const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User_Addr = sequelize.define(
  "address",
  {
    address: { type: DataTypes.STRING, allowNull: true },
    city: { type: DataTypes.STRING, allowNull: true },
    postal_zip: { type: DataTypes.STRING, allowNull: true },
    country: { type: DataTypes.STRING, allowNull: true },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = User_Addr;
