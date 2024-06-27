const User = require("../models/user");
const { Op } = require("sequelize");
let users;

class UserService {
  async getAllUsers() {
    users = await User.findAll();
    return users;
  }
  async getSomeUsers(user) {
    users = await User.findAll({
      where: {
        name: {
          [Op.like]: `%${user}%`,
        },
      },
    });
    return users;
  }
}

module.exports = new UserService();
