import * as jwt from "jsonwebtoken";

export const signToken = (userId, role) => {
  return jwt.sign({ userId, role }, config.jwtSecret, {
    expiresIn: config.jwtExpires,
  });
};
