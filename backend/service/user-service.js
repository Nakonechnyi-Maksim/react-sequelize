const User = require("../models/user");
const User_Addr = require("../models/users_addr");
const User_Card = require("../models/users_card");
User.hasOne(User_Addr, { foreignKey: "id", sourceKey: "address_id" });
User.hasOne(User_Card, { foreignKey: "id", sourceKey: "card_id" });
const { Op } = require("sequelize");
let res;

class UserService {
  async getAllUsers() {
    res = await User.findAll();
    return res;
  }
  async getSomeUsers(user) {
    res = await User.findAll({
      where: {
        name: {
          [Op.like]: `%${user}%`,
        },
      },
    });
    return res;
  }
  async getUserAddr() {
    res = await User.findAll({
      include: [
        {
          model: User_Addr,
        },
        {
          model: User_Card,
        },
      ],
    });
    return res;
  }
}

module.exports = new UserService();
