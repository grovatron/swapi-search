import React from 'react';

function sortByNameAlph(a, b) {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0;
}

const SpeciesListItem = props => (
  <li>
    {props.spec.name}
  </li>
)

const SpeciesList = props => (
  <div>
    <h3>Species</h3>
    <ul className='list'>
      {props.species.sort((a,b) => sortByNameAlph(a,b))
        .map(spec => (
          <SpeciesListItem spec={spec} key={spec.name} />
        ))}
    </ul>
  </div>
);

export default SpeciesList;
