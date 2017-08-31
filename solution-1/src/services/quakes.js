// import fetch from 'isomorphic-fetch'; // TODO: use 'fetch-mock' in unit tests then uncomment this
import { quakesEndpoint } from '../config/endpoints';
import { formatData } from '../models';

const fetchQuakes = () => fetch(quakesEndpoint);

const parseQuakes = (response) => {
  return response.json()
  .then(json => {

    let quakes = [];
    if(json && json.features) {
      quakes = json.features.map(formatData);
    }
    return quakes
  })
};

export { fetchQuakes, parseQuakes };
