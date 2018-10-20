import React from 'react';

function sortByNameAlph(a, b) {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0;
}

const PlanetsListItem = props => (
  <li>
    {props.planet.name}
  </li>
)

const PlanetsList = props => (
  <div>
    <h3>Planets</h3>
    <ul className='list'>
      {props.planets.sort((a,b) => sortByNameAlph(a,b))
        .map(planet => (
          <PlanetsListItem planet={planet} key={planet.name} />
        ))}
    </ul>
  </div>
);

export default PlanetsList;
