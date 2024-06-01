const Router = require("express").Router;
const router = new Router();
const UserController = require("../controllers/user-controller");

router.get("/users", UserController.getUsers);

module.exports = router;
