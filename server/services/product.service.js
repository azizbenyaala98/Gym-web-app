import Product from '../models/product.model';
import CommonService from './common.service';

class ProductService extends CommonService {
  constructor() {
    super('product');
  }

  async addLoveToProduct(id) {
    const product = await Product.findById(id);
    return await Product.findByIdAndUpdate(
      id,
      { loved: product.loved + 1 },
      { new: true }
    );
  }
}
export default new ProductService();
