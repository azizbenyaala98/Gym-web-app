import UserService from '../services/user.service';

export default {
  Mutation: {
    login: (_, args, _) => {
      return UserService.login(args);
    },
    signup: (_, args, _) => {
      return UserService.createAdminUser(args);
    },
  },
};
