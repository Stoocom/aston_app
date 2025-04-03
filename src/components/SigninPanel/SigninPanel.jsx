import { useState } from 'react';
import { Input, Space, Button } from 'antd';
import { LocalStorage } from '../LocalStorage/LocalStorage';
import { useNavigate } from 'react-router-dom';
import styles from './SigninPanel.module.scss';

export const SigninPanel = () => {
  const { setCurrentUser } = LocalStorage();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
    setLoginError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasError = false;

    if (!login) {
      setLoginError('Введите логин');
      hasError = true;
    }
    if (!password) {
      setPasswordError('Введите пароль');
      hasError = true;
    }
    if (hasError) return;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.login === login);
    if (!user) {
      setLoginError('Логин не найден');
      return;
    }
    if (user.password !== password) {
      setPasswordError('Неверный пароль');
      return;
    }
    console.log('Вход выполнен успешно');
    setCurrentUser(login);
    document.dispatchEvent(new Event('userChanged')); // Триггер обновления
    navigate('/');
  };

  return (
    <>
      <form className={styles.form}>
        <Space direction="vertical">
          <Input
            placeholder="логин"
            value={login}
            onChange={handleLoginChange}
          />
          {loginError && <span className={styles.errors}>{loginError}</span>}
          <Input.Password
            placeholder="пароль"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <span className={styles.errors}>{passwordError}</span>
          )}
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Вход
          </Button>
        </Space>
      </form>
    </>
  );
};
