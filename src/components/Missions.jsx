import React, { Component } from 'react';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import Title from './Title';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          missions.map((mission) => (
            <MissionCard key={ mission.name } missionsInfo={ mission } />
          ))
        }
      </div>
    );
  }
}
