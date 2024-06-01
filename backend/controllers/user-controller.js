const userService = require("../service/user-service");

class UserController {
  async getUsers(req, res, next) {
    try {
      console.log("Запрос на /api/users");
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (e) {
      console.error("Ошибка при получении пользователей:", e);
      next(e);
    }
  }
}

module.exports = new UserController();
