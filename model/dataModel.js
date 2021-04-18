const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  marks: { type: Number },
});

const UserModel = mongoose.model("users", UserSchema); //collection_name , schema_name

module.exports = UserModel;
