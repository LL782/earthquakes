import React, { Component } from 'react';
import Quakes from '../components/Quakes';
import { fetchQuakes, parseQuakes } from '../services/quakes';

class App extends Component {
  constructor() {
    super();
    this.state = { quakes: [] };
  }

  componentDidMount() {
    fetchQuakes()
      .then(parseQuakes)
      .then(this.setQuakes.bind(this))
      .catch(this.handleError);
  }

  setQuakes(quakes) {
    this.setState({ quakes });
  }

  handleError(error) {
    // LOG ERRORS
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
