import React from 'react';

function sortByNameAlph(a, b) {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0;
}

const PeopleListItem = props => (
  <li>
    {props.person.name}
  </li>
)

const PeopleList = props => (
  <div>
    <h3>People</h3>
    <ul className='list'>
      {props.people.sort((a,b) => sortByNameAlph(a,b))
        .map(person => (
          <PeopleListItem person={person} key={person.name} />
        ))}
    </ul>
  </div>
);

export default PeopleList;
