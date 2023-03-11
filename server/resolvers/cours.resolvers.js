import CoursService from '../services/cours.service.js';

export default {
  Mutation: {
    addCours: (_, { document }) => {
      return CoursService.addCours(document);
    },
    deleteCours: (_, { id }) => {
      return CoursService.deleteCours(id);
    },

    updateCours: (_, { id, document }) => {
      return CoursService.updateCours(id, document);
    },
  },
  Query: {
    getCours: () => {
      return CoursService.getCours();
    },
    getCour: (_, { id }) => {
      console.log('id', id);
      return CoursService.getCour(id);
    },
  },
};
