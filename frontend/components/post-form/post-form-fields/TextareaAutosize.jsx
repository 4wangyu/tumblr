import React, { useState, useContext, useMemo } from 'react';
import { FormContext } from '../PostForm';

const TextareaAutosize = ({ min = 1, max = 10, fieldName = '', placeholder = 'hi' }) => {

  const { formFields, setFormFields } = useContext(FormContext);

  const [[minRows, maxRows], setRowRange] = useState([min, max]);
  const [rows, setRows] = useState(5);
  const fieldValue = useMemo(() => formFields[fieldName], [fieldName]);

  const handleChange = e => {
    const { value, rows: prevRows, scrollHeight } = e.target;

    const textareaLineHeight = 24;

    e.target.rows = minRows; // reset number of rows in textarea 

    const currentRows = ~~(scrollHeight / textareaLineHeight);


    if (currentRows === prevRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = e.target.scrollHeight;
    }

    setRows(currentRows < maxRows ? currentRows : maxRows);
    console.log([fieldName], value)

    setFormFields(prev => ({ ...prev, [fieldName]: value }));
  };

  return <textarea
    onChange={handleChange}
    rows={rows}
    value={fieldValue}
    placeholder={placeholder}
  />;
};




export default TextareaAutosize;