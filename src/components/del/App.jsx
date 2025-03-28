// Import memo, useCallback and useState hooks:
import { memo, useCallback, useState } from 'react';

// Import update method and yup:
import update from 'immutability-helper';
import * as yup from 'yup';

// Import Form component:
import { Form } from './form';

// Create validation schema:
const formSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  website: yup.string().url().required(),
});

// Create the App component:
export const App = memo(() => {
  // Create state for form values:
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    website: '',
  });
  // Create state for form errors:
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    website: false,
  });

  // Create handler for input change event:
  const onFieldChange = useCallback((fieldName, value) => {
    setValues((prevValues) =>
      update(prevValues, {
        [fieldName]: {
          $set: value,
        },
      })
    );
  }, []);

  // Create handler for form submit event:
  const onSubmit = useCallback(
    async (event) => {
      // Prevent form from submitting:
      event.preventDefault();

      // Check the schema if form is valid:
      const isFormValid = await formSchema.isValid(values, {
        abortEarly: false, // Prevent aborting validation after first error
      });

      if (isFormValid) {
        // If form is valid, continue submission.
        console.log('Form is legit');
      } else {
        // If form is not valid, check which fields are incorrect:
        formSchema.validate(values, { abortEarly: false }).catch((err) => {
          // Collect all errors in { fieldName: boolean } format:
          const errors = err.inner.reduce((acc, error) => {
            return {
              ...acc,
              [error.path]: true,
            };
          }, {});

          // Update form errors state:
          setErrors((prevErrors) =>
            update(prevErrors, {
              $set: errors,
            })
          );
        });
      }
    },
    [values]
  );

  // Render the form:
  return (
    <Form
      values={values}
      errors={errors}
      onFieldChange={onFieldChange}
      onSubmit={onSubmit}
    />
  );
});
