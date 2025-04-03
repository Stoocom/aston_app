import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieItemProps } from '../types/movie';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export const MoviePage = () => {
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState<MovieItemProps | undefined>();

  useEffect(() => {
    if (location.state) {
      setMovieDetails(location.state);
    }
  }, [location.state]);

  if (!movieDetails) {
    return <div>Нет информации для видео/сериала</div>;
  }

  return (
    <>
      <Title level={2}>Информация о видео</Title>
      <Title level={3}>
        Название:
        {movieDetails.title
          ? ' ' + movieDetails.title
          : '-'}
      </Title>
      { movieDetails.primaryImage && <img style={{ width: '50%'}}src={movieDetails.primaryImage} alt={movieDetails.title} /> }
      <Paragraph>
        Рейтинг:
        {movieDetails.averageRating ? ' ' + movieDetails.averageRating : '-'}
      </Paragraph>
      <Paragraph>
        Публикация:
        {movieDetails.startYear ? ' ' + movieDetails.startYear : '-'}
      </Paragraph>
    </>
  );
};
