import { useState, useEffect, useMemo, useCallback } from "react";

const isValidEmail = email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
const isEmpty = value => value.length === 0;
const isSecurePassword = password => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password);
const min = (n = 0, value) => value.length >= n;
const max = (n = 0, value) => value.length <= n;

const useFormValidation = ({
  onSubmit = () => null,
  initialValues = {}
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const noErrors = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const validateValues = () => {
    const newErrors = {}
    for (const [name, value] of Object.entries(values)) {
      newErrors[name] = [];
      if (isEmpty(value)) newErrors[name].push(`A ${name} is required`);
      switch (name) {
        case "email": {
          if (!isValidEmail(value)) newErrors.email.push(`That's not a valid email address`);
          break;
        };
        case "password": {
          if (!isSecurePassword(value)) newErrors.password.push(`
            Password must contain at least one number, one lowercase and one uppercase letter
          `);
          break;
        };
      }
    }
    setErrors(newErrors);
  };

  useEffect(() => {
    if (isSubmitting) {
      if (noErrors) {
        onSubmit(values)
          .fail(({ responseText: errorJSON }) => setErrors(JSON.parse(errorJSON)))
          .always(() => setSubmitting(false));
      } else {
        setSubmitting(false);
      }
    }
  }, [isSubmitting]);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    validateValues();
    setSubmitting(true);
  };

  return {
    handleBlur: validateValues,
    handleSubmit,
    handleChange,
    values,
    setValues,
    errors,
    isSubmitting,
  };
};

export default useFormValidation;