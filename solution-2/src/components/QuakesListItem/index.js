import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ id, place, mag, magType }) => (
  <li key={id}>
    {id} : {place} : {mag} : {magType}
  </li>
);

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  mag: PropTypes.string.isRequired,
  magType: PropTypes.string.isRequired,
};

export default ListItem;
