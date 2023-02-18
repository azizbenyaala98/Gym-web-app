import UserService from '../services/user.service';

export default {
  Mutation: {
    login: (_, args) => {
      return UserService.login(args);
    },
    signup: (_, args) => {
      return UserService.createAdminUser(args);
    },
    updateUser: (_, { id, document }) => {
      return UserService.editUser(id, document);
    },
    deleteUser: (_, { id }) => {
      return UserService.deleteUser(id);
    },
  },
  Query: {
    users: () => {
      return UserService.getUsers();
    },
    getUser: (_, { id }) => {
      return UserService.getUserById(id);
    },
  },
};
