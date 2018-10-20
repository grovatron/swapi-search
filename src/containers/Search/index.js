import React, { Component } from 'react';

const SWAPI_BASE = 'https://swapi.co/api/';

class Search extends Component {

  state = {
    films: [],
    people: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
    searchValue: 'l',
  }

  componentDidMount() {
    fetch(`${SWAPI_BASE}films/?search=l`)
      .then(response => response.json())
      .then(json => this.setState({films: json.results}));
  }

  render() {
    const { films } = this.state;
    return(
      <div>
        <p>Search container</p>
        <p>films length: {films.length}</p>
      </div>
    )
  }
}

export default Search;
