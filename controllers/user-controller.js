const userServise = require("../service/user-service");


class UserController {
  async registration(req, res, next) {
    try {
      const { name,  email, password } = req.body;
   
      const userDada = await userServise.registration(email, password, name);
      
      return res.json(userDada);
    } catch (e) {
      console.log(e);
    }
  }
  async login(req, res, next) {
    try {
    } catch (e) {}
  }
 
  async getUsers(req, res, next) {
    try {
     const users = await userServise.getAllUsers()
     return res.json(users)
    } catch (e) {}
  }
}

module.exports = new UserController();
