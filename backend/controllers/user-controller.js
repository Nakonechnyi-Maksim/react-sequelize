const userService = require("../service/user-service");

class UserController {
  async getUsers(req, res, next) {
    try {
      console.log("Запрос на /api/users");
      console.log(req);
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (e) {
      console.error("Ошибка при получении пользователей:", e);
      next(e);
    }
  }
  async getSomeUsers(req, res, next) {
    try {
      console.log("Запрос на /api/someUsers");
      const users = await userService.getSomeUsers(req.query.name);
      return res.json(users);
    } catch (e) {
      console.error("Ошибка при получении пользователей:", e);
      next(e);
    }
  }
}

module.exports = new UserController();
