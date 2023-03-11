import userResolvers from './user.resolvers';
import coursResolvers from './cours.resolvers.js';
import salleResolvers from './salle.resolvers';
import memberResolvers from './member.resolver';
import productResolver from './product.resolver';
import cartResolver from './cart.resolver';
import coachResolver from './coach.resolver';

const resolversArray = [
  userResolvers,
  coursResolvers,
  salleResolvers,
  memberResolvers,
  productResolver,
  cartResolver,
  coachResolver,
];

function extractQuery(resolvers) {
  let resolversObject = {};
  resolvers.forEach((resolver) => {
    resolversObject = {
      ...resolversObject,
      ...resolver.Query,
    };
  });
  return resolversObject;
}

function extractMutation(resolvers) {
  let resolversObject = {};
  resolvers.forEach((resolver) => {
    resolversObject = {
      ...resolversObject,
      ...resolver.Mutation,
    };
  });
  return resolversObject;
}

const resolvers = {
  Query: extractQuery(resolversArray),
  Mutation: extractMutation(resolversArray),
};
export default resolvers;
