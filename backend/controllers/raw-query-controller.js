const rawQueryService = require("../service/raw-query-service");

class RawQueryController {
  async dropTable(req, res, next) {
    try {
      console.log("Запрос на /api/rawQuery");
      // console.log(req);
      const users = await rawQueryService.rawQuery(req.query.query);
      return res.json(users);
    } catch (e) {
      console.error("Ошибка при получении пользователей:", e);
      next(e);
    }
  }
}

module.exports = new RawQueryController();
