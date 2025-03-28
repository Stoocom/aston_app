import { useState, useEffect, useCallback } from 'react';
import update from 'immutability-helper';
import * as yup from 'yup';

// Схема валидации
const formSchema = yup.object().shape({
  login: yup.string().min(3, 'Минимум 3 символа').required('Логин обязателен'),
  password: yup
    .string()
    .min(8, 'Минимум 8 символов')
    .required('Пароль обязателен'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли должны совпадать')
    .required('Подтвердите пароль'),
  agreement: yup.boolean().oneOf([true], 'Необходимо согласие'),
});

export const Validation = ({ children }) => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    confirmPassword: '',
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [disabledButton, setDisabledButton] = useState(true);

  // Обновление полей формы
  const onFieldChange = useCallback((fieldName, value) => {
    setFormData((prevValues) =>
      update(prevValues, {
        [fieldName]: { $set: value },
      })
    );
  }, []);

  // Валидация формы
  const validateForm = useCallback(async () => {
    try {
      await formSchema.validate(formData, { abortEarly: false });
      setErrors({});
      setDisabledButton(false);
    } catch (err) {
      const newErrors = err.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      setErrors(newErrors);
      setDisabledButton(true);
    }
  }, [formData]);

  // Вызываем валидацию при изменении формы
  useEffect(() => {
    validateForm();
  }, [formData, validateForm]);

  return children({
    formData,
    errors,
    disabledButton,
    onFieldChange,
    handleSubmit: async (event) => {
      event.preventDefault();
      await validateForm();
      if (Object.keys(errors).length === 0) {
        console.log('Форма отправлена');
      }
    },
  });
};
