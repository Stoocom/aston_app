import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import MovieItem from '../MovieItem/MovieItem';
import Skeleton from '../MovieItem/Skeleton';
import { fetchMovies } from '../../store/movieSlice';
import styles from './MovieList.module.scss';

function MovieList() {
  const dispatch = useDispatch<AppDispatch>();
  const searchValue = useSelector(
    (state: RootState) => state.searchSlice.value
  );
  const { genre, country } = useSelector((state: RootState) => state.filters);
  const { movies, loading } = useSelector(
    (state: RootState) => state.moviesList
  );

  useEffect(() => {
    dispatch(fetchMovies({ searchValue, genre, country }));
  }, [dispatch, searchValue, genre, country]);

  const movieItems = movies.map((item) => (
    <MovieItem key={item.id} {...item} />
  ));
  const skeleton = [...Array(8)].map((_, index) => <Skeleton key={index} />);
  return (
    <div>
      {loading == 'error' ? (
        <div>
          <p>Ошибка при загрузке фильмов</p>
        </div>
      ) : (
        <div className={styles.movies}>
          {loading === 'loading' ? skeleton : movieItems}
        </div>
      )}
    </div>
  );
}

export default MovieList;
