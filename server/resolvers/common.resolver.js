export function createResolver(service, name) {
  return {
    Mutation: {
      [`add${name}`]: (_, { document }) => {
        return service.create(document);
      },
      [`delete${name}`]: (_, { id }) => {
        return service.delete(id);
      },
      [`update${name}`]: (_, { id, document }) => {
        return service.update(id, document);
      },
    },
    Query: {
      [`get${name}`]: (_, { id }) => {
        return service.findById(id);
      },

      [`get${name}s`]: (_) => {
        return service.findAll();
      },
    },
  };
}
