import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    console.log(this.props);
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-card">{planetName}</p>
        <img alt={ planetName } src={ planetImage } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
export default PlanetCard;
