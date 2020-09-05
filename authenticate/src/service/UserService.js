import User from '../model/user';

const findUser = function(name) {
  return User.findOne({name: name});
};

export default {
  findUser,
};
