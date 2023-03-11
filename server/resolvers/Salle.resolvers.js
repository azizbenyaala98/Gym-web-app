import salleService from '../services/salle.service';
import { createResolver } from './common.resolver';

const resolvers = createResolver(salleService, 'Salle');

export default resolvers;
