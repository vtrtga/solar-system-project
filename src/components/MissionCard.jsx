import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { missionsInfo } = this.props;
    return (
      <div data-testid="mission-card">
        <p>{missionsInfo.name}</p>
        <p>
          {missionsInfo.country}
        </p>
        <p>
          {missionsInfo.destination}
        </p>
        <p>
          {missionsInfo.year}
        </p>
      </div>
    );
  }
}
MissionCard.propTypes = {
  missionsInfo: PropTypes.string.isRequired,
};

export default MissionCard;
