import UserService from '../services/user.service';

export default {
  Mutation: {
    login: (_, args) => {
      return UserService.login(args);
    },
    signup: (_, args) => {
      return UserService.createAdminUser(args);
    },
  },
  Query: {
    users: () => {
      return UserService.getUsers();
    },
  },
};
