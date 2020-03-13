import { useState, useEffect, useMemo, useCallback } from "react";
import Schema from 'form-schema-validation';

const useFormValidation = ({
  onSubmit = () => null,
  validationSchema = new Schema({}, false, false),
  initialValues = {}
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const noErrors = useMemo(() => Object.keys(errors).length === 0, [errors]);
  const validateValues = useCallback(() => setErrors(validationSchema.validate(values)), [errors, values]);

  useEffect(() => {
    if (isSubmitting) {
      if (noErrors) {
        const submitted = onSubmit(values)

        if (submitted instanceof Promise) {
          return submitted
            .catch(errors => setErrors(errors))
            .finally(() => setSubmitting(false));
        }
      }
      setSubmitting(false);
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

// Example onSubmit func
export const mockApiRequest = () => new Promise((res, rej) => {
  setTimeout(() => {
    rej({ email: "Not valid", password: "Not secure" });
  }, 3000);
});

export default useFormValidation;