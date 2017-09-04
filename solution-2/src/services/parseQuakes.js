import quakeDataFormat from '../models/quakeDataFormat';

const parseQuakes = response => response.json()
  .then((json) => {
    let quakes = [];
    if (json && json.features) {
      quakes = json.features.map(quakeDataFormat);
    }
    return quakes;
  });

export default parseQuakes;
