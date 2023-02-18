import userResolvers from './user.resolvers';
import coursResolvers from './cours.resolvers.js';
import salleResolvers from './salle.resolvers';
import memberResolvers from './member.resolver';

const resolvers = {
  Query: {
    welcome: () => {
      return 'welcome to salle de sport project';
    },
    ...coursResolvers.Query,
    ...salleResolvers.Query,
    ...userResolvers.Query,
    ...memberResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...coursResolvers.Mutation,
    ...salleResolvers.Mutation,
    ...memberResolvers.Mutation,
  },
};
export default resolvers;
