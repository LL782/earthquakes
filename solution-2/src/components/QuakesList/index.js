import React from 'react';
import PropTypes from 'prop-types';
import QuakesListItem from '../QuakesListItem';

const QuakesList = ({ quakes }) => (
  <ul>
    { quakes.map(QuakesListItem) }
  </ul>
);

QuakesList.propTypes = {
  quakes: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

QuakesList.defaultProps = {
  quakes: [],
};

export default QuakesList;
