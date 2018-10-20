import React, { Component } from 'react';
import FilmsList from '../../components/FilmsList';

const SWAPI_BASE = 'https://swapi.co/api/';

class Search extends Component {

  state = {
    films: [],
    people: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
    searchValue: '',
  }

  // componentDidMount() {
  //   fetch(`${SWAPI_BASE}films/?search=l`)
  //     .then(response => response.json())
  //     .then(json => this.setState({films: json.results}));
  // }

  onSearchInputChange = event => {
    this.setState({searchValue: event.target.value});
    if (event.target.value !== '') {
      fetch(`${SWAPI_BASE}films/?search=${event.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({films: json.results}));
      fetch(`${SWAPI_BASE}people/?search=${event.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({people: json.results}));
      fetch(`${SWAPI_BASE}planets/?search=${event.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({planets: json.results}));
      fetch(`${SWAPI_BASE}species/?search=${event.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({species: json.results}));
      fetch(`${SWAPI_BASE}starships/?search=${event.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({starships: json.results}));
      fetch(`${SWAPI_BASE}vehicles/?search=${event.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({vehicles: json.results}));
    } else {
      this.setState({
        films: [],
        people: [],
        planets: [],
        species: [],
        starships: [],
        vehicles: [],
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
      searchValue
    } = this.state;
    return(
      <div>
        <p>Search container</p>
        <input
          value={searchValue}
          type='text'
          placeholder='Search films, people, planets, etc.'
          onChange={this.onSearchInputChange} />
        <FilmsList films={films}/>
      </div>
    )
  }
}

export default Search;
