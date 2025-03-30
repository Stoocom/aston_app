import React, { useState } from 'react';
import { Input, Space, Button } from 'antd';
import { LocalStorage } from '../LocalStorage/LocalStorage';

export const SigninPanel = () => {
  const { getUser } = LocalStorage();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = getUser(login, password);

    if (user) {
      console.log('Вход выполнен успешно');
    } else {
      console.log('Проблема со входом');
    }
  };

  return (
    <>
      <form>
        <Space direction="vertical">
          <Input
            placeholder="логин"
            value={login}
            onChange={handleLoginChange}
          />

          <Input.Password
            placeholder="пароль"
            value={password}
            onChange={handlePasswordChange}
          />

          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Вход
          </Button>
        </Space>
      </form>
    </>
  );
};
