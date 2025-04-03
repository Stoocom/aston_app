import { useMemo } from 'react';
import { Input, Tooltip, Space, Button, Checkbox, notification } from 'antd';
import { Validation } from '../Validation/Validation';
import { LocalStorage } from '../LocalStorage/LocalStorage';
import { useNavigate } from 'react-router-dom';
import styles from './SignupPanel.module.scss';

export const SignupPanel = () => {
  const [api, contextHolder] = notification.useNotification();
  const storage = useMemo(() => LocalStorage(), []);
  const { saveUser, setCurrentUser } = storage;
  const navigate = useNavigate();
  const tooltipText = {
    login: 'От 3 до 10 символов, только латинские буквы и цифры',
    password: 'Мин. 8 символов, заглавная буква, цифра, спецсимвол',
  };

  return (
    <Validation>
      {({
        formData,
        errors,
        disabledButton,
        isSubmitted,
        onFieldChange,
        handleSubmit,
      }) => {
        const handleFormSubmit = async (data) => {
          const error = saveUser(data.login, data.password);
          if (error) {
            api.error({
              message: error,
              placement: 'bottomRight',
              icon: null,
              className: styles.popUpError,
            });
          } else {
            setCurrentUser(data.login);
            document.dispatchEvent(new Event('userChanged')); // Триггер обновления
            navigate('/');
          }
        };

        return (
          <form
            className={styles.form}
            onSubmit={(event) => handleSubmit(event, handleFormSubmit)}
          >
            <Space direction="vertical">
              <Space.Compact block className={styles.center}>
                <Input
                  placeholder="логин"
                  onChange={(e) => onFieldChange('login', e.target.value)}
                  name="login"
                  value={formData.login}
                />
                <Tooltip title={tooltipText.login} placement="bottom">
                  <img
                    src="/info.svg"
                    className={styles.img}
                    alt="info_login"
                  />
                </Tooltip>
              </Space.Compact>
              {isSubmitted && errors.login && (
                <div className={styles.errors}>
                  {errors.login.map((err, index) => (
                    <div key={index}>{err}</div>
                  ))}
                </div>
              )}

              <Space.Compact block className={styles.center}>
                <Input.Password
                  placeholder="пароль"
                  onChange={(e) => onFieldChange('password', e.target.value)}
                  name="password"
                  value={formData.password}
                />
                <Tooltip title={tooltipText.password} placement="bottom">
                  <img
                    src="/info.svg"
                    className={styles.img}
                    alt="info_password"
                  />
                </Tooltip>
              </Space.Compact>
              {isSubmitted && errors.password && (
                <div className={styles.errors}>
                  {errors.password.map((err, index) => (
                    <div key={index}>{err}</div>
                  ))}
                </div>
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
                <span className={styles.errors}>{errors.confirmPassword}</span>
              )}

              <Checkbox
                onChange={(e) => onFieldChange('agreement', e.target.checked)}
                name="agreement"
                checked={formData.agreement}
              >
                Согласие на обработку персональных данных
              </Checkbox>
              {isSubmitted && errors.agreement && (
                <span className={styles.errors}>{errors.agreement}</span>
              )}

              {contextHolder}
              <Button
                type="primary"
                htmlType="submit"
                disabled={disabledButton}
              >
                Регистрация
              </Button>
            </Space>
          </form>
        );
      }}
    </Validation>
  );
};
