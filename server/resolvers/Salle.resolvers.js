import SalleService from '../services/Salle.service.js';

export default {
  Mutation: {
    addSalle: (_, args) => {
      return SalleService.addSalle(args);
    },
    deleteSalle: (_, args) => {
      return SalleService.deleteSalle(args);
    },

    updateSalle: (_, args) => {
      return SalleService.updateSalle(args);
    },
  },
  Query: {
    getSalles: () => {
      return SalleService.getsalles();
    },
    getSalle: (_, args) => {
      return SalleService.getsalle(args);
    },
  },
};
