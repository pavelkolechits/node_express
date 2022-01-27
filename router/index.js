const Router = require("express").Router;
const userController = require("../controllers/user-controller");

const router = new Router();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/data_item", userController.createItem);
router.post("/create_collection", userController.createCollection);
router.get("/users", userController.getUsers);
router.post("/get_user", userController.getUser);

module.exports = router;
