import React from 'react';
import PropTypes from 'prop-types';

const QuakesFilters = ({ filterType, allQuakes, setQuakes, setZeroFound }) => {
  let filterValue = 0;
  const filterName = filterType === 'mag' ? 'magnitude' : 'magType';

  const filterMethod = {
    mag: quake => quake.mag === filterValue / 1,
    magType: quake => quake.magType === filterValue,
  };

  const handleChange = (e) => {
    filterValue = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const shortList = allQuakes.filter(filterMethod[filterType]);
    const zeroFound = shortList.length === 0;
    setQuakes(shortList);
    setZeroFound(zeroFound);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={filterType}>Filter by {filterName}: </label>
      <input id={filterType} type="text" onChange={handleChange} />
      <button>Filter</button>
    </form>
  );
};

QuakesFilters.propTypes = {
  filterType: PropTypes.oneOf(['mag', 'magType']).isRequired,
  allQuakes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  setQuakes: PropTypes.func.isRequired,
  setZeroFound: PropTypes.func.isRequired,
};

export default QuakesFilters;
