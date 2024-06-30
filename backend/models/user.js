const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "users",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    second_name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    card_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "card",
        key: "id",
      },
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "address",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = User;
