import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import missions from './data/missions';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        {
          missions.map((mission) => (
            <Missions key={ mission.name } missionsInfo={ mission } />
          ))
        }
      </>
    );
  }
}

export default App;
