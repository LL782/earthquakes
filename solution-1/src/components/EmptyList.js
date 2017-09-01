import React from 'react';

const EmptyList = ({ quakes }) => {
  return quakes.length === 0 ? (<p>No results found</p>) : null;
};

export default EmptyList;
