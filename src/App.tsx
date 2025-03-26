import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { SigninPage } from './pages/SigninPage';
import { SignupPage } from './pages/SignupPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ContentLayout } from './pages/ContentLayout';
import { MainPage } from './pages/MainPage';
import { HistoryPage } from './pages/HistoryPage';
import { MoviePage } from './pages/MoviePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContentLayout />}>
        <Route index element={<MainPage />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="movie" element={<MoviePage />} />
        <Route path="*" element={<div>Page not found.</div>} />
      </Route>
    </Routes>
  );
}

export default App;
