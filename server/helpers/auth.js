import * as jwt from 'jsonwebtoken';
import config from '../config';

export const signToken = (userId, role) => {
  return jwt.sign({ userId, role }, config.jwtSecret, {
    expiresIn: config.jwtExpires,
  });
};
