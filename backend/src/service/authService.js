import jwt from 'jsonwebtoken';
import {AuthenticationError} from 'apollo-server';

const verifyToken = function(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) {
    throw new AuthenticationError('No token provided! ' +
      'Please provide authentication.');
  }
  return jwt.verify(token, process.env.SECRET);
};

export default {
  verifyToken,
};
