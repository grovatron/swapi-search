import React, { Component } from 'react';
import FilmsList from '../../components/Lists/FilmsList';
import PeopleList from '../../components/Lists/PeopleList';
import PlanetsList from '../../components/Lists/PlanetsList';
import SpeciesList from '../../components/Lists/SpeciesList';
import StarshipsList from '../../components/Lists/StarshipsList';
import VehiclesList from '../../components/Lists/VehiclesList';
import Loader from '../../components/Loader';

const SWAPI_BASE = 'https://swapi.co/api/';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      films: [],
      people: [],
      planets: [],
      species: [],
      starships: [],
      vehicles: [],
      searchValue: '',
      isFetching: false,
    }
    this.timeout = 0;
  }

  async fetchData(searchTerm) {
    try {
      let [ films, people, planets, species, starships, vehicles ] = await Promise.all([
        fetch(`${SWAPI_BASE}films/?search=${searchTerm}`)
        .then(response => response.json()),
        fetch(`${SWAPI_BASE}people/?search=${searchTerm}`)
        .then(response => response.json()),
        fetch(`${SWAPI_BASE}planets/?search=${searchTerm}`)
        .then(response => response.json()),
        fetch(`${SWAPI_BASE}species/?search=${searchTerm}`)
        .then(response => response.json()),
        fetch(`${SWAPI_BASE}starships/?search=${searchTerm}`)
        .then(response => response.json()),
        fetch(`${SWAPI_BASE}vehicles/?search=${searchTerm}`)
        .then(response => response.json())
      ]);
      // let [ films, people, planets, species, starships, vehicles ] = await allResponses;
      this.setState({
        films: films.results,
        people: people.results,
        planets: planets.results,
        species: species.results,
        starships: starships.results,
        vehicles: vehicles.results,
        isFetching: false
      });
    } catch (err) {
      console.log(err);
    }
  }

//TODO:Fix bugs associated with slow fetching
  onSearchInputChange = async(event) => {
    const searchTerm = event.target.value;
    this.setState({searchValue: searchTerm, isFetching: true});
    if (this.timeout) clearTimeout(this.timeout);
    if (event.target.value !== '') {
      this.timeout = setTimeout(() => {
        this.fetchData(searchTerm);
      }, 300);
    } else {
      this.setState({
        films: [],
        people: [],
        planets: [],
        species: [],
        starships: [],
        vehicles: [],
        isFetching: false,
      }
    );
    }
  }

  render() {
    const {
      films,
      people,
      planets,
      species,
      starships,
      vehicles,
      searchValue,
      isFetching
    } = this.state;
    return(
      <div>
        <p>Search container</p>
        <input
          value={searchValue}
          type='text'
          placeholder='Search films, people, planets, etc.'
          onChange={this.onSearchInputChange} />
        {isFetching && <Loader />}
        {
          !isFetching &&
          <div>
            {films.length !== 0 && <FilmsList films={films}/>}
            {people.length !== 0 && <PeopleList people={people}/>}
            {planets.length !== 0 && <PlanetsList planets={planets}/>}
            {species.length !== 0 && <SpeciesList species={species}/>}
            {starships.length !== 0 && <StarshipsList starships={starships}/>}
            {vehicles.length !== 0 && <VehiclesList vehicles={vehicles}/>}
          </div>
        }

      </div>
    )
  }
}

export default Search;
