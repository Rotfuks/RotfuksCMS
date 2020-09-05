const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, index: { unique: true } },
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

export default User;