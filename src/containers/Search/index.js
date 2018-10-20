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
    searchValue: '',
  }

  // componentDidMount() {
  //   fetch(`${SWAPI_BASE}films/?search=l`)
  //     .then(response => response.json())
  //     .then(json => this.setState({films: json.results}));
  // }

  onSearchInputChange = event => {
    this.setState({searchValue: event.target.value});
    fetch(`${SWAPI_BASE}films/?search=${event.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({films: json.results}));
  }

  render() {
    const { films, searchValue } = this.state;
    return(
      <div>
        <p>Search container</p>
        <input
          value={searchValue}
          type='text'
          placeholder='Search films, people, planets, etc.'
          onChange={this.onSearchInputChange} />
        <p>films length: {films.length}</p>
      </div>
    )
  }
}

export default Search;
