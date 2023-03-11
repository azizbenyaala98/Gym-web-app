import CommonService from './common.service';

class CoachService extends CommonService {
  constructor() {
    super('coach');
  }
}
export default new CoachService();
