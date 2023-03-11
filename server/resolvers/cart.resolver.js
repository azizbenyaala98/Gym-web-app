import cartService from '../services/cart.service';

import { createResolver } from './common.resolver';

const resolvers = createResolver(cartService, 'Cart');

export default {
  ...resolvers,
  Mutation: {
    ...resolvers.Mutation,
  },
};
