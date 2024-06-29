const User = require("../models/user");
const User_Addr = require("../models/users_addr");
User_Addr.belongsTo(User, { foreignKey: "addres", targetKey: "addres" });
User.hasMany(User_Addr, { foreignKey: "id", sourceKey: "addres" });
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
    res = await User.findAll({ include: User_Addr });
    return res;
  }
}

module.exports = new UserService();
