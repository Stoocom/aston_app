import React, { useState } from 'react';
import { Input, Tooltip, Space, Button, Checkbox } from 'antd';

export const SignupPanel = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    confirmPassword: '',
    agreement: false,
  });

  const handleChange = (e) => {
    const { value, checked, name, type } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    console.log({ [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <>
      <Space direction="vertical">
        <Tooltip title="Подсказка 1" placement="bottom">
          <Input
            placeholder="логин"
            onChange={handleChange}
            name="login"
            value={formData.login}
          />
        </Tooltip>

        <Tooltip title="Подсказка 2" placement="bottom">
          <Input.Password
            placeholder="пароль"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
        </Tooltip>
        <Input.Password
          placeholder="повторите пароль"
          onChange={handleChange}
          name="confirmPassword"
          value={formData.confirmPassword}
        />
        <Checkbox
          onChange={handleChange}
          name="agreement"
          checked={formData.agreement}
        >
          Согласие на обработку персональных данных
        </Checkbox>
        <Button type="primary" disabled={false}>
          Регистрация
        </Button>
      </Space>
    </>
  );
};
