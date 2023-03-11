import Salle from '../models/salle.model';
import CommonService from './common.service';

class SalleService extends CommonService {
  constructor() {
    super('salle');
  }
}
export default new SalleService();
