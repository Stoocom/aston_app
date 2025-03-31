import { Link } from 'react-router-dom';
import styles from './MovieItem.module.scss';
import { Button } from 'antd';

interface MovieItemProps {
  title: string;
  primaryImage: string | null;
  startYear: number | null;
  averageRating: number;
}

function MovieItem({
  title,
  primaryImage,
  startYear,
  averageRating,
}: MovieItemProps) {
  return (
    <>
      {primaryImage && (
        <div className={styles.movie}>
          <h3 className={styles.movie__title}>{title}</h3>
          <img src={primaryImage} alt={title} />
          <div className={styles.movie__info}>
            <p className={styles.movie__year}>{startYear}</p>
            <p className={styles.movie__rating}>IMDb: {averageRating}</p>
          </div>
          <Link to="/movie" className="custom_big" state={{ title, primaryImage, startYear, averageRating }}>
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
