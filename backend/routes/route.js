const Router = require("express").Router;
const router = new Router();
const UserController = require("../controllers/user-controller");

router.get("/users", UserController.getUsers);
router.get("/someUsers", UserController.getSomeUsers);
router.get("/someUserAddr", UserController.getUserAddr);

module.exports = router;
