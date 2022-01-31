const UserModel = require("../models/user-model");
const bcript = require("bcrypt");
const UserDto = require("../dtos/user-dto");

class UserService {
  async registration(email, password, name) {
    try {
      const candidate = await UserModel.findOne({ email });

      if (candidate) {
        throw new Error(`Пользователь с таким адресом ${email} уже существует`);
      }

      const hashPassword = await bcript.hash(password, 3);

      const user = await UserModel.create({
        collections: [],
        email,
        password: hashPassword,
        name,
        role: ["user"],
        setting: { theme: "black", language: "en" },
      });
      const userDto = new UserDto(user);
      return { user: userDto };
    } catch (e) {
      return e.message;
    }
  }
  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }
  async login(email, password) {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw new Error("Пользователь не найден.");
      }
      const isPassEquals = await bcript.compare(password, user.password);
      if (!isPassEquals) {
        throw new Error("Неверный пароль.");
      }
      return user;
    } catch (e) {
      return e.message;
    }
  }
  async createItem(item, _id, collectionId, itemId) {
    try {
      const itemObj = {
        content: item,
        likes: [],
        comments: [],
        tags: [],
        date: new Date(),
        id: itemId,
      };
      const user = await UserModel.findById({ _id: _id }).updateOne(
        { "collections.id": collectionId },
        { $push: { "collections.$.items": itemObj } }
      );

      return user;
    } catch (e) {}
  }

  async createCollection(collectionName, description, _id, img, collectionId) {
    try {
      const item = {
        collectionName: collectionName,
        img: img,
        description: description,
        items: [],
        date: new Date(),
        id: collectionId,
      };
      const user = await UserModel.findOneAndUpdate(
        { _id: _id },
        {
          $push: { collections: item },
        }
      );
      
      return user;
    } catch (e) {}
  }
  async getUser(_id) {
    try {
      const user = await UserModel.findById(_id);
      return user;
    } catch (e) {}
  }
}

module.exports = new UserService();
