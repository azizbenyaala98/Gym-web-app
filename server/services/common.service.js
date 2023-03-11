import models from '../models/models';

class CommonService {
  constructor(modelName) {
    console.log('Model name', modelName);
    this.modelName = modelName;
  }

  async findAll() {
    return await models[this.modelName].find();
  }

  async update(id, args) {
    return await models[this.modelName].findByIdAndUpdate(id, args);
  }

  async delete(id) {
    await models[this.modelName].findByIdAndDelete(id);
    return true;
  }

  async findById(id) {
    return await models[this.modelName].findById(id);
  }
  async create(args) {
    return await models[this.modelName].create(args);
  }
}

export default CommonService;
