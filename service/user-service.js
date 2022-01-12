const UserModel = require("../models/user-model");
const bcript = require("bcrypt");
const uuid = require("uuid");
const UserDto = require("../dtos/user-dto");

class UserService {

  async registration(email, password, name) {

    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(`Пользователь с таким адресом ${email} уже существует`);
    }
    const hashPassword = await bcript.hash(password, 3);
  
    const user = await UserModel.create({
      email,
      password: hashPassword,
      name,
    });

   
    const userDto = new UserDto(user);
    
    
    return { user: userDto };
  }
  async getAllUsers (){
    const  users = await UserModel.find()
    return users
  }
}

module.exports = new UserService();
