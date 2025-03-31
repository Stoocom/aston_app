import { Link } from 'react-router-dom';
import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import { LocalStorage } from '../LocalStorage/LocalStorage';
import './HeaderMenu.scss';

export const HeaderMenu = () => {
  const { getCurrentUser, logout } = LocalStorage();
  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  useEffect(() => {
    const updateUser = () => setCurrentUser(getCurrentUser());

    document.addEventListener('userChanged', updateUser);
    return () => document.removeEventListener('userChanged', updateUser);
  }, []);

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    document.dispatchEvent(new Event('userChanged')); // Обновляем состояние
  };

  return (
    <Flex justify="space-between">
      <Link to="/" className="custom_big">
        Лого
      </Link>
      <Flex gap="large">
        {currentUser ? (
          <>
            <span className="custom_big">{currentUser}</span>
            <Link to="#" className="custom_big" onClick={handleLogout}>
              Выйти
            </Link>
          </>
        ) : (
          <>
            <Link to="/signin" className="custom_big">
              Вход
            </Link>
            <Link to="/signup" className="custom_big">
              Регистрация
            </Link>
          </>
        )}
      </Flex>
    </Flex>
  );
};
