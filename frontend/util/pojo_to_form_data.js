const toSnakecase = str => {
  return str.split('').reduce((acc, letter) => {
    const charCode = letter.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      return acc + `_${letter.toLowerCase()}`
    };

    return acc + letter;
  }, '');
};

const pojoToFormData = (pojo, root_key = 'post') => {
  const formData = new FormData();

  for (const [key, val] of Object.entries(pojo)) {
    if (val === undefined || val === null) continue;

    const snakeKey = toSnakecase(key);

    if (val instanceof Array) {
      if (val.length === 0) continue;

      for (const el of val) formData.append(`${root_key}[${snakeKey}][]`, el);
    } else {
      formData.append(`${root_key}[${snakeKey}]`, val);
    };
  };

  return formData;
};

export default pojoToFormData;