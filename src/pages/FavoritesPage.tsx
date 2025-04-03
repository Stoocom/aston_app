import { useState, useEffect } from 'react';
import MovieItem from '../components/MovieItem/MovieItem';
import Skeleton from '../components/MovieItem/Skeleton';

interface Movie {
  id: number;
  title: string;
  startYear: number | null;
  primaryImage: string;
  averageRating: number;
}
export const FavoritesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavoritesMovies = async () => {
      try {
        const response = await fetch(
          'https://1d74b2bc0bf535e0.mokky.dev/favorites'
        );
        const data = await response.json();
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка запроса:', error);
      }
    };

    fetchFavoritesMovies();
  }, []);

  const movieItems = movies.map((item) => (
    <MovieItem key={item.id} {...item} />
  ));
  const skeleton = [...Array(8)].map((_, index) => <Skeleton key={index} />);
  return (
    <div>
      <h2>Избранные фильмы</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {loading ? skeleton : movieItems}
      </div>
    </div>
  );
};
