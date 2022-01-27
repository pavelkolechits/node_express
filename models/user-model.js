const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String},
  role: [],
  setting: {},
  collections: [],
  
});

module.exports = model("User", UserSchema);
