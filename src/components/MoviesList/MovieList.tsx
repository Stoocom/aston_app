import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import MovieItem from '../MovieItem/MovieItem';
import styles from './MovieList.module.scss';

interface Movie {
  id: string;
  primaryTitle: string;
  startYear: number | null;
  primaryImage: string;
  averageRating: number;
}

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const searchValue = useSelector(
    (state: RootState) => state.searchSlice.value
  );
  const { genre } = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    const fetchMovies = async () => {
      let url = `https://imdb236.p.rapidapi.com/imdb/search?type=movie&rows=25`;

      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            'd6be4deda4msh4b82314ea83294ap197d42jsnc4a7c3593726',
          'x-rapidapi-host': 'imdb236.p.rapidapi.com',
        },
      };

      if (searchValue)
        url += `&primaryTitle=${encodeURIComponent(searchValue)}`;
      if (genre) url += `&genre=${encodeURIComponent(genre)}`;

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [searchValue, genre]);

  return (
    <div className={styles.movies}>
      {movies.map((item) => (
        <MovieItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default MovieList;
