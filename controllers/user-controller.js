const userService = require("../service/user-service");

class UserController {
  async registration(req, res, next) {
    try {
      const { name, email, password } = req.body;

      const userDada = await userService.registration(email, password, name);

      return res.json(userDada);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const userDada = await userService.login(email, password);

      return res.json(userDada);
    } catch (e) {
      return res.json(e);
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (e) {}
  }
  async createItem(req, res, next) {
    try {
      const { item, _id } = req.body;
      const user = await userService.createItem(item, _id);
      return res.json(user);
    } catch (e) {}
  }
  async createCollection(req, res, next) {
    try {
      const { collectionName, description, _id, img ,collectionId} = req.body;
      const collection = await userService.createCollection(
        collectionName,
        description,
        _id,
        img,
        collectionId,
      );
     console.log(_id)
      return res.json(collection);
    } catch (e) {}
  }
  async getUser(req, res, next) {
    try {
      const { _id } = req.body;
      const user = await userService.getUser(_id);
      return res.json(user);
    } catch (e) {}
  }
}

module.exports = new UserController();
