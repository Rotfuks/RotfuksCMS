const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, index: {unique: true}},
  email: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

export default User;
