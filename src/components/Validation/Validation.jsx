import { useState, useEffect, useCallback } from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  login: yup
    .string()
    .min(3, 'Минимум 3 символа')
    .max(10, 'Максимум 10 символов')
    .matches(
      /^[a-zA-Z0-9]+$/,
      'Логин может содержать только латинские буквы и цифры'
    )
    .required('Логин обязателен'),

  password: yup
    .string()
    .min(8, 'Минимум 8 символов')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру')
    .matches(
      /[^A-Za-z0-9]/,
      'Пароль должен содержать хотя бы один специальный символ'
    )
    .required('Пароль обязателен'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли должны совпадать')
    .required('Подтвердите пароль'),

  agreement: yup.boolean(),
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onFieldChange = useCallback((fieldName, value) => {
    setFormData((prevValues) => ({ ...prevValues, [fieldName]: value }));
  }, []);

  const validateForm = useCallback(async () => {
    try {
      await formSchema.validate(formData, { abortEarly: false });
      setErrors({});
    } catch (err) {
      const newErrors = err.inner.reduce((acc, error) => {
        if (!acc[error.path]) {
          acc[error.path] = [];
        }
        acc[error.path].push(`- ${error.message}`);
        return acc;
      }, {});
      setErrors(newErrors);
    }
    setDisabledButton(!formData.agreement);
  }, [formData]);

  useEffect(() => {
    validateForm();
  }, [formData, validateForm]);

  return children({
    formData,
    errors,
    disabledButton,
    isSubmitted,
    onFieldChange,
    handleSubmit: async (event, onSuccess) => {
      event.preventDefault();
      setIsSubmitted(true);
      validateForm();
      if (Object.keys(errors).length === 0 && formData.agreement) {
        onSuccess(formData);
      }
    },
  });
};
