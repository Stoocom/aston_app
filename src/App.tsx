import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SigninPage } from './pages/SigninPage';
import { SignupPage } from './pages/SignupPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ContentLayout } from './pages/ContentLayout';
import { MainPage } from './pages/MainPage';
import { HistoryPage } from './pages/HistoryPage';
import { MoviePage } from './pages/MoviePage';
import { JSX } from 'react';
import { LocalStorage } from './components/LocalStorage/LocalStorage';

const PrivateRoute = ({ children }: { children: JSX.Element}) => {
  const { getCurrentUser } = LocalStorage();
  const login = getCurrentUser();
  return login ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContentLayout />}>
        <Route index element={<MainPage />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="favorites" element={<PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>} />
        <Route path="history" element={<PrivateRoute>
            <HistoryPage />
          </PrivateRoute>} />
        <Route path="movie" element={<MoviePage />} />
        <Route path="*" element={<div>Page not found.</div>} />
      </Route>
    </Routes>
  );
}

export default App;
