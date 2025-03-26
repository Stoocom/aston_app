import { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieDetails } from '../types';

export const MoviePage = () => {
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | undefined>();

  useLayoutEffect(() => {
    if (location.state) {
      setMovieDetails(location.state);
    }
  }, []);

  if (!movieDetails) {
    return <div>Нет информации для видео/сериала</div>;
  }

  return (
    <>
      <div>Информация о видео</div>
      <p>
        Название:
        {movieDetails.originalTitleAutocomplete
          ? ' ' + movieDetails.originalTitleAutocomplete
          : '-'}
      </p>
      <p>
        Тип:
        {movieDetails.type ? ' ' + movieDetails.type : '-'}
      </p>
      <p>
        Жанр:
        {movieDetails.genres ? ' ' + movieDetails.genres : '-'}
      </p>
      <p>
        Публикация:
        {movieDetails.startYearFrom ? ' ' + movieDetails.startYearFrom : '-'}
      </p>
    </>
  );
};
