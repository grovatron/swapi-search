import React from 'react';

function sortByNameAlph(a, b) {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0;
}

const StarshipsListItem = props => (
  <li>
    {props.starship.name}
  </li>
)

const StarshipsList = props => (
  <div>
    <h3>Starships</h3>
    <ul className='list'>
      {props.starships.sort((a,b) => sortByNameAlph(a,b))
        .map(starship => (
          <StarshipsListItem starship={starship} key={starship.name} />
        ))}
    </ul>
  </div>
);

export default StarshipsList;
