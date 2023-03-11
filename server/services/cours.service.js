import Cours from '../models/cours.model.js';

class CoursService {
  async getCours() {
    const result = await Cours.find();
    console.log('Courses', result);
    return result;
  }

  async getCour(id) {
    const result = await Cours.findById(id);
    return result;
  }

  async addCours(args) {
    const newCours = new Cours(args);
    await newCours.save();
    return newCours;
  }

  async deleteCours(id) {
    await Cours.findByIdAndDelete(id);
    return true;
  }

  async updateCours(id, doc) {
    const result = await Cours.findByIdAndUpdate(id, doc, {
      new: true,
    });
    return result;
  }
}

export default new CoursService();
