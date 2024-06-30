const Sequelize = require("../db");

class RawQueryService {
  async rawQuery(query) {
    try {
      const [res, metadata] = await Sequelize.query(`${query}`);
      return res;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new RawQueryService();
