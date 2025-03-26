import styles from './MovieItem.module.scss';
import { Button } from 'antd';

interface MovieItemProps {
  primaryTitle: string;
  primaryImage: string | null;
  startYear: number | null;
  averageRating: number;
}

function MovieItem({
  primaryTitle,
  primaryImage,
  startYear,
  averageRating,
}: MovieItemProps) {
  return (
    <>
      {primaryImage && (
        <div className={styles.movie}>
          <h3 className={styles.movie__title}>{primaryTitle}</h3>
          <img src={primaryImage} alt={primaryTitle} />
          <div className={styles.movie__info}>
            <p className={styles.movie__year}>{startYear}</p>
            <p className={styles.movie__rating}>IMDb: {averageRating}</p>
          </div>
          <Button color="danger" variant="solid">
            Подробнее
          </Button>
        </div>
      )}
    </>
  );
}

export default MovieItem;
