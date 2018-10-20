import React from 'react';

function sortByNameAlph(a, b) {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0;
}

const VehiclesListItem = props => (
  <li>
    {props.vehicle.name}
  </li>
)

const VehiclesList = props => (
  <div>
    <h3>Vehicles</h3>
    <ul className='list'>
      {props.vehicles.sort((a,b) => sortByNameAlph(a,b))
        .map(vehicle => (
          <VehiclesListItem vehicle={vehicle} key={vehicle.name} />
        ))}
    </ul>
  </div>
);

export default VehiclesList;
