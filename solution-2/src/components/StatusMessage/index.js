import React from 'react';
import PropTypes from 'prop-types';

const StatusMessage = ({ error, loading, zeroFound }) => {
  if (error) {
    return <p>Error :(</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (zeroFound) {
    return <p>not found</p>;
  }
  return null;
};

StatusMessage.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  zeroFound: PropTypes.bool,
};

StatusMessage.defaultProps = {
  error: false,
  loading: false,
  zeroFound: false,
};

export default StatusMessage;
