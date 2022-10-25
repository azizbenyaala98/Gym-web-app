import Salle from '../models/salle.model';

class SalleService {
  getSalles = async () => {
    const salles = await Salle.find();
    return salles;
  };

  getSalle = async (args) => {
    const salle = await Salle.findById(args.id);
    return salle;
  };

  addSalle = async (args) => {
    const newSalle = new Salle({ title: args.title });
    await newSalle.save();
    return newSalle;
  };
  deleteSalle = async (args) => {
    await Salle.findByIdAndDelete(args.id);
    return 'salle deleted successsfully';
  };
  updateSalle = async (args) => {
    const { id, title } = args;
    const updatedSalle = {};
    if (title != undefined) {
      updatedSalle.title = title;
    }

    const salle = await Salle.findByIdAndUpdate(id, updatedProduct, {
      new: true,
    });
    return salle;
  };
}
export default SalleService;
