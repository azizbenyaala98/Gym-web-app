import cartService from '../services/cart.service';
import coachService from '../services/coach.service';

import { createResolver } from './common.resolver';

const resolvers = createResolver(coachService, 'Coach');

export default {
  ...resolvers,
  Mutation: {
    ...resolvers.Mutation,
  },
};
