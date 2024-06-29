const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User_Addr = sequelize.define(
  "users_addr",
  {
    address: { type: DataTypes.STRING, allowNull: true },
    city: { type: DataTypes.STRING, allowNull: true },
    postalzip: { type: DataTypes.STRING, allowNull: true },
    region: { type: DataTypes.STRING, allowNull: true },
    country: { type: DataTypes.STRING, allowNull: true },
    latlng: { type: DataTypes.STRING, allowNull: true },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = User_Addr;
