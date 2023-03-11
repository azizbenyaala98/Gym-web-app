import productService from '../services/product.service';

import { createResolver } from './common.resolver';

const resolvers = createResolver(productService, 'Product');

export default {
  ...resolvers,
  Mutation: {
    ...resolvers.Mutation,
    addLoveToProduct: (_, { id }) => {
      return productService.addLoveToProduct(id);
    },
  },
};
