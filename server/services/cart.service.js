import CommonService from './common.service';

class CartService extends CommonService {
  constructor() {
    super('cart');
  }
}
export default new CartService();
