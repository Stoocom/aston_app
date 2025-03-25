import React, { useState, useEffect } from 'react';
import { Input, Tooltip, Space, Button, Checkbox } from 'antd';

export const SignupPanel = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    confirmPassword: '',
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [disabledButton, setDisabledButton] = useState(true);

  const handleChange = (e) => {
    const { value, checked, name, type } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.login.trim())
      newErrors.login = 'Отсутствует логин (пока так)';
    if (!formData.password)
      newErrors.password = 'Отсутствует пароль (пока так)';
    if (!formData.confirmPassword)
      newErrors.confirmPassword = 'Повторите пароль (пока так)';
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = 'Пароли должны совпадать';
    }
    if (!formData.agreement)
      newErrors.agreement = 'Нужно дать согласие (пока так)';

    setErrors(newErrors);
    setDisabledButton(Object.keys(newErrors).length > 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log('Всё ок, форма отправлена');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical">
        <Tooltip title="что должно быть в логине" placement="bottom">
          <Input
            placeholder="логин"
            onChange={handleChange}
            name="login"
            value={formData.login}
          />
        </Tooltip>
        {errors.login && <span style={{ color: 'red' }}>{errors.login}</span>}

        <Tooltip title="что должно быть в пароле" placement="bottom">
          <Input.Password
            placeholder="пароль"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
        </Tooltip>
        {errors.password && (
          <span style={{ color: 'red' }}>{errors.password}</span>
        )}

        <Input.Password
          placeholder="повторите пароль"
          onChange={handleChange}
          name="confirmPassword"
          value={formData.confirmPassword}
        />
        {errors.confirmPassword && (
          <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
        )}

        <Checkbox
          onChange={handleChange}
          name="agreement"
          checked={formData.agreement}
        >
          Согласие на обработку персональных данных
        </Checkbox>
        {errors.agreement && (
          <span style={{ color: 'red' }}>{errors.agreement}</span>
        )}

        <Button type="primary" htmlType="submit" disabled={disabledButton}>
          Регистрация
        </Button>
      </Space>
    </form>
  );
};
