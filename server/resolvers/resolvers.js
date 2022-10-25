import userResolvers from './user.resolvers';
import coursResolvers from './cours.resolvers.js';
import salleResolvers from './salle.resolvers';

const resolvers = {
  Query: {
    welcome: () => {
      return 'welcome to salle de sport project';
    },
    ...coursResolvers.Query,
    ...salleResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...coursResolvers.Mutation,
    ...salleResolvers.Mutation,
  },
};
export default resolvers;
