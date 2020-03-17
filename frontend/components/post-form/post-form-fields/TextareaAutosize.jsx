import React, { useState, useContext, useMemo, useEffect, useRef } from 'react';
import { FormContext } from '../PostForm'

const TextareaAutosize = ({
  lineHeight = 24,
  placeholder,
  name,
  ...props }) => {
  const [{ rows, minRows, maxRows }, setState] = useState({
    rows: 1,
    minRows: 1,
    maxRows: 10
  });

  const { formFields, setFormFields } = useContext(FormContext)

  const value = useMemo(() => formFields[name], [formFields, name])
  const $textarea = useRef();

  useEffect(() => {
    $textarea.current.focus();
  }, [])

  const handleChange = event => {
    const { rows: previousRows } = event.target;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / lineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    const newValue = event.target.value;

    setState(prev => ({
      ...prev,
      rows: currentRows < maxRows ? currentRows : maxRows
    }));

    setFormFields(prev => ({ ...prev, [name]: newValue }))
  };
  return (
    <textarea
      {...props}
      ref={$textarea}
      name={name}
      rows={rows}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={handleChange}
    />
  );
};

export default TextareaAutosize;