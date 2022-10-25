import CoursService from '../services/cours.service.js';

export default {
  Mutation: {
    addCours: (_, args) => {
      return CoursService.addCours(args);
    },
    deleteCours: (_, args) => {
      return CoursService.deleteCours(args);
    },

    updateCours: (_, args) => {
      return CoursService.updateCours(args);
    },
  },
  Query: {
    getCours: () => {
      return CoursService.getCours();
    },
    getCours: (_, args) => {
      return CoursService.getCours(args);
    },
  },
};
