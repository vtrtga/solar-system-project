import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    console.log('fdasdf');
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          {
            Planets.map((planet) => (
              <PlanetCard
                key={ planet
                  .name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
