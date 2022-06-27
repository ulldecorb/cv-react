import React from 'react';
import PropTypes from 'prop-types';

function Minimal({ cv }) {
  return (
    <h1>
      {cv.header.name}
    </h1>
  );
}

Minimal.propTypes = {
  cv: PropTypes.shape({
    header: PropTypes.objectOf(PropTypes.string).isRequired,
    personal: PropTypes.objectOf(PropTypes.string).isRequired,
    aboutMe: PropTypes.objectOf(PropTypes.string).isRequired,
    education: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    workExperience: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    languages: PropTypes.objectOf(PropTypes.string).isRequired
  }).isRequired
};

export default Minimal;
