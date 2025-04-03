import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieItem.module.scss';
import { HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface MovieItemProps {
  id: number;
  title: string;
  primaryImage: string | null;
  startYear: number | null;
  averageRating: number;
}

function MovieItem({
  id,
  title,
  primaryImage,
  startYear,
  averageRating,
}: MovieItemProps) {
  const [liked, setLiked] = useState(false);
  const [movieId, setMovieId] = useState<number | null>(null);

  const handleLike = async () => {
    try {
      const url = 'https://1d74b2bc0bf535e0.mokky.dev/favorites';

      const requestOptions = {
        method: liked ? 'DELETE' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: liked
          ? undefined
          : JSON.stringify({
              title,
              primaryImage,
              startYear,
              averageRating,
            }),
      };

      const response = await fetch(
        liked ? `https://1d74b2bc0bf535e0.mokky.dev/favorites/${movieId}` : url,
        requestOptions
      );

      if (!response.ok) {
        throw new Error('Ошибка при отправке запроса');
      }

      if (!liked) {
        const data = await response.json();
        setMovieId(data.id);
      }

      setLiked(!liked);
    } catch (error) {
      console.log('Ошибка при отправке запроса:', error);
    }
  };

  return (
    <>
      {primaryImage && (
        <div className={styles.movie}>
          <div className={styles.movie__top}>
            <h3 className={styles.movie__title}>{title}</h3>
            <HeartOutlined
              onClick={handleLike}
              style={{
                fontSize: '22px',
                cursor: 'pointer',
                color: liked ? 'red' : 'black',
              }}
            />
          </div>
          <img src={primaryImage} alt={title} />
          <div className={styles.movie__info}>
            <p className={styles.movie__year}>{startYear}</p>
            <p className={styles.movie__rating}>IMDb: {averageRating}</p>
          </div>
          <Link
            to="/movie"
            className="custom_big"
            state={{ title, primaryImage, startYear, averageRating }}
          >
            <Button color="danger" variant="solid">
              Подробнее
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default MovieItem;
