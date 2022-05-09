import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class Missions extends React.Component {
  render() {
    const { missionsInfo } = this.props;
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
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
Missions.propTypes = {
  missionsInfo: PropTypes.string.isRequired,
};

export default Missions;
