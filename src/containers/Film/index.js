import React, { Component } from 'react';
import Loader from '../../components/Loader';

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
        {characters !== null && <p>{characters[0]}</p>}
      </div>
    )
  }
}

export default Film;
