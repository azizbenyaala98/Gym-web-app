import Cours from '../models/cours.model.js';

class CoursService {
  getCours = async () => {
    const Cours = await Cours.find();
    return Cours;
  };
  getCours = async (args) => {
    const Cours = await Cours.findById(args.id);
    return Cours;
  };

  addCours = async (args) => {
    const newCours = new Cours({ title: args.title });
    await newCours.save();
    return newCours;
  };
  deleteCours = async (args) => {
    await Cours.findByIdAndDelete(args.id);
    return 'Cours deleted successsfully';
  };
  updateCours = async ({ id, title }) => {
    const updatedCours = {};
    if (title != undefined) {
      updatedCours.title = title;
    }

    const Cours = await Cours.findByIdAndUpdate(id, updatedProduct, {
      new: true,
    });
    return Cours;
  };
}

export default CoursService;
