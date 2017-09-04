import React, { Component } from 'react';

import QuakesFilter from '../QuakesFilter';
import QuakesList from '../QuakesList';
import StatusMessage from '../StatusMessage';
import Title from '../Title';

import fetchQuakes from '../../services/fetchQuakes';
import parseQuakes from '../../services/parseQuakes';

class QuakesLister extends Component {
  constructor() {
    super();
    this.allQuakes = [];
    this.doneLoading = this.doneLoading.bind(this);
    this.setError = this.setError.bind(this);
    this.setQuakes = this.setQuakes.bind(this);
    this.setZeroFound = this.setZeroFound.bind(this);

    this.state = {
      error: false,
      loading: false,
      quakes: [],
      zeroFound: false,
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
  }

  componentDidMount() {
    fetchQuakes()
      .then(parseQuakes)
      .then((quakes) => {
        this.doneLoading();
        this.cacheQuakes(quakes);
        this.setQuakes(quakes);
      })
      .catch(this.setError);
  }

  setError(error) {
    const hasError = !!error;
    this.setState({ error: hasError });
  }

  setQuakes(quakes) {
    this.setState({ quakes });
  }

  setZeroFound(zeroFound) {
    this.setState({ zeroFound });
  }

  doneLoading() {
    this.setState({ loading: false });
  }

  cacheQuakes(quakes) {
    this.allQuakes = quakes.map(x => x);
  }

  render() {
    return (
      <div>
        <Title />
        <QuakesFilter
          filterType="mag"
          allQuakes={this.allQuakes}
          setQuakes={this.setQuakes}
          setZeroFound={this.setZeroFound}
        />
        <QuakesFilter
          filterType="magType"
          allQuakes={this.allQuakes}
          setQuakes={this.setQuakes}
          setZeroFound={this.setZeroFound}
        />
        <StatusMessage
          error={this.state.error}
          loading={this.state.loading}
          zeroFound={this.state.zeroFound}
        />
        <QuakesList
          quakes={this.state.quakes}
        />
      </div>
    );
  }
}

export default QuakesLister;
