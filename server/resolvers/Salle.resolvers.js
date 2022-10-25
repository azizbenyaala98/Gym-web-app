import Salle from '../models/salle.js';

const SalleResolvers = {
  Query: {
    getSalles: async () => {
      const salles = await Salle.find();
      console.log('Salles', salles);
      return salles;
    },
    getSalle: async (root, args) => {
      const salle = await Salle.findById(args.id);
      return salle;
    },
  },
  Mutation: {
    addSalle: async (root, args) => {
      const newSalle = new Salle({ title: args.title });
      await newSalle.save();
      return newSalle;
    },
    deleteSalle: async (root, args) => {
      await Salle.findByIdAndDelete(args.id);
      return 'salle deleted successsfully';
    },
    updateSalle: async (root, args) => {
      const { id, title } = args;
      const updatedProduct = {};
      if (title != undefined) {
        updatedProduct.title = title;
      }

      const result = await Salle.findByIdAndUpdate(id, updatedProduct, {
        new: true,
      });
      return result;
    },
  },
};
export default SalleResolvers;
