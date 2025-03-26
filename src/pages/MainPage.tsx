import React from 'react';
import FilterPanel from '../components/FilterPanel/FilterPanel';
import MovieList from '../components/MoviesList/MovieList';
import { SearchPanel } from '../components/SearchPanel/SearchPanel';

export const MainPage = () => {
  return (
    <>
      <div>Сервис по поиску фильма</div>
      <SearchPanel />
      <FilterPanel />
      <MovieList />
    </>
  );
};
