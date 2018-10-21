import React, { Component } from 'react';
import Loader from '../../components/Loader';
import FilmInfo from '../../components/Info/FilmInfo'

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: null,
    }
  }

  async componentDidMount() {
    let characters = await Promise.all(this.props.location.state.characters.map(
      url => fetch(url).then(response => response.json())
      .then(json => json.name)));
    this.setState({ characters });
  }

  render() {
    const { characters } = this.state;
    return (
      <div>
        {characters === null && <Loader />}
        {
          characters !== null
          &&
          <FilmInfo film={this.props.location.state} characters={characters}/>
        }
      </div>
    )
  }
}

export default Film;
