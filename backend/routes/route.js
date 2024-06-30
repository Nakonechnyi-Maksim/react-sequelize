const Router = require("express").Router;
const router = new Router();
const UserController = require("../controllers/user-controller");
const RawQueryController = require("../controllers/raw-query-controller");

router.get("/users", UserController.getUsers);
router.get("/someUsers", UserController.getSomeUsers);
router.get("/someUserAddr", UserController.getUserAddr);
router.get("/rawQuery", RawQueryController.dropTable);

module.exports = router;
