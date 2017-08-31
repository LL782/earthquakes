import React, { Component } from 'react';
// import fetch from 'isomorphic-fetch';  // TODO: import without causing specs to fail

const endpoint = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02';

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

const handleResponse = (response) => {
  return response.json()
  .then( json => json.features.map(formatData) )
};

const logError = (error) => {
  console.log('error: ', error);
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
    return fetch(endpoint)
    .then(handleResponse)
    .then((quakes) => this.setState( { quakes: quakes } ))
    .catch(logError);
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
