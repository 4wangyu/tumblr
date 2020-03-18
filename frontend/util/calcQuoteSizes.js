const FONT_SIZES = Object.freeze([
  [312, 16], [94, 24], [32, 36], [0, 48]
]);

const calcQuoteSizes = quote => {
  let fontSize;
  if (Boolean(quote)) {
    const strLen = quote.length;
    for (const [len, size] of FONT_SIZES) {
      if (len <= strLen) {
        fontSize = size;
        break;
      };
    };
  } else {
    fontSize = FONT_SIZES[FONT_SIZES.length - 1][1];
  };

  const lineHeight = Math.ceil(fontSize * 1.4);

  return { fontSize, lineHeight };
};

export default calcQuoteSizes;