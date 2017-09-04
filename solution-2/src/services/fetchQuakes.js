import 'isomorphic-fetch';
import routes from '../config/routes';

const fetchQuakes = () => global.fetch(routes.quakesEndpoint);

export default fetchQuakes;
