import userResolvers from './user.resolvers';

const resolvers = {
  Query: {
    welcome: () => {
      return 'welcome to salle de sport project';
    },
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};
export default resolvers;
