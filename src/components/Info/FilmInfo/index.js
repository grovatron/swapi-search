import React from 'react';
import '../../Lists/lists.css';

function alphSort(a,b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

const FilmInfo = (props) => (
  <div>
    <h2>{props.film.title}</h2>
    <p>Release date: {props.film.release_date}</p>
    <p>Episode: {props.film.episode_id}</p>
    <h4>Featured characters</h4>
    <ul class='list'>
      {props.characters.sort((a,b) => alphSort(a,b)).map((character, i) => (
        <li key={i}>
          {character}
        </li>
      ))
      }
    </ul>
  </div>
);

export default FilmInfo;
