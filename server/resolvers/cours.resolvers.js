import CoursService from '../services/cours.service.js';

export default {
  Mutation: {
    addCours: (args) => {
      return CoursService.addCours(args);
    },
    deleteCours: (args) => {
      return CoursService.deleteCours(args);
    },

    updateCours: (args) => {
      return CoursService.updateCours(args);
    },
  },
  Query: {
    getCours: () => {
      return CoursService.getCours();
    },
    getCours: (args) => {
      return CoursService.getCours(args);
    },
  },
};
