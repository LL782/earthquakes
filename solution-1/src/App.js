import React, { Component } from 'react';
import { quakesEndpoint } from './config/endpoints';
// import fetch from 'isomorphic-fetch';  // TODO: import without causing specs to fail


const Quake = ({ id, place, mag, magType}) => (
  <li key={id}>
    {id} : {place} : {mag} : {magType}
  </li>
);

const Quakes = ({quakes}) => (
  <ul>
    { quakes.map(Quake) }
  </ul>
);

const formatData = (quake) => ({
  id: quake.id,
  place: quake.properties.place,
  mag: quake.properties.mag,
  magType: quake.properties.magType
});

const handleJson = json => json ? json.features.map(formatData) : []

const handleResponse = (response) => {
  return response.json()
  .then( handleJson )
};

class App extends Component {

  constructor() {
    super();
    this.state = { quakes: [] };
  }

  componentDidMount() {
    this.fetchQuakeData();
  }

  fetchQuakeData() {
    return fetch(quakesEndpoint)
    .then(handleResponse)
    .then((quakes) => this.setState( { quakes: quakes } ))
    .catch(this.handleError);


  }

  handleError(error) {
    // ADD ERROR LOGGING HERE
  }

  render() {
    return (
      <div>
        <h2>Where Earthquakes have happened</h2>
        <Quakes quakes={this.state.quakes} />
      </div>
    );
  }
}

export default App;
