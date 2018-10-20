import React from 'react';
import '../lists.css';

function sortByDate(filmA, filmB) {
  if (filmA.release_date < filmB.release_date) return -1;
  if (filmA.release_date > filmB.release_date) return 1;
  return 0;
}

const FilmsListItem = (props) => (
  <li>
    {`${props.film.title}, ${props.film.release_date.substring(0,4)}`}
  </li>
)

const FilmsList = (props) => (
  <div>
    <h3>Films</h3>
    <ul className='list'>
      {
        props.films.sort((a,b) => sortByDate(a,b))
          .map(film => (
            <FilmsListItem film={film} key={film.episode_id}/>
          ))
      }
    </ul>
  </div>
);

export default FilmsList;
