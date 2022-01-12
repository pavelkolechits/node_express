module.exports = class UserDto {
  email;
  id;
  name;
  password;
  

  constructor(model) {
    this.email = model.email;
    this._id = model.id;
    this.name = model.name;
    this.password = model.password
    
  }
};
