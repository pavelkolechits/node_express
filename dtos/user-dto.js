module.exports = class UserDto {
  email;
  id;
  name;
  password;
  setting;
  role;
  collections;
  

  constructor(model) {
    this.email = model.email;
    this._id = model.id;
    this.name = model.name;
    this.password = model.password;
    this.setting = model.setting;
    this.role = model.role;
    this.collections = model.collections
  }
};
