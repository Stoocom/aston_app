import React from 'react';
import { Input, Tooltip, Space, Button, Checkbox } from 'antd';
import { Validation } from '../Validation/Validation';

export const SignupPanel = React.memo(() => {
  return (
    <Validation>
      {({
        formData,
        errors,
        disabledButton,
        isSubmitted,
        onFieldChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Space direction="vertical">
            <Space.Compact block>
              <Input
                placeholder="логин"
                onChange={(e) => onFieldChange('login', e.target.value)}
                name="login"
                value={formData.login}
              />
              <Tooltip title="Минимум 3 символа" placement="bottom">
                <img
                  src="/info.svg"
                  style={{ width: '25px', height: '25px' }}
                  alt="info_login"
                />
              </Tooltip>
            </Space.Compact>
            {isSubmitted && errors.login && (
              <span style={{ color: 'red' }}>{errors.login}</span>
            )}

            <Space.Compact block>
              <Input.Password
                placeholder="пароль"
                onChange={(e) => onFieldChange('password', e.target.value)}
                name="password"
                value={formData.password}
              />
              <Tooltip title="Минимум 8 символов" placement="bottom">
                <img
                  src="/info.svg"
                  style={{ width: '25px', height: '25px' }}
                  alt="info_password"
                />
              </Tooltip>
            </Space.Compact>
            {isSubmitted && errors.password && (
              <span style={{ color: 'red' }}>{errors.password}</span>
            )}

            <Space.Compact block style={{ width: 'calc(100% - 25px)' }}>
              <Input.Password
                placeholder="повторите пароль"
                onChange={(e) =>
                  onFieldChange('confirmPassword', e.target.value)
                }
                name="confirmPassword"
                value={formData.confirmPassword}
              />
            </Space.Compact>
            {isSubmitted && errors.confirmPassword && (
              <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
            )}

            <Checkbox
              onChange={(e) => onFieldChange('agreement', e.target.checked)}
              name="agreement"
              checked={formData.agreement}
            >
              Согласие на обработку персональных данных
            </Checkbox>
            {isSubmitted && errors.agreement && (
              <span style={{ color: 'red' }}>{errors.agreement}</span>
            )}

            <Button type="primary" htmlType="submit" disabled={disabledButton}>
              Регистрация
            </Button>
          </Space>
        </form>
      )}
    </Validation>
  );
});
