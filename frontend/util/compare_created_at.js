const compareCreatedAt = (a, b) => {
  const dateA = new Date(a);
  const dateB = new Date(b);
  return dateA > dateB ? 1 : -1;
}

export default compareCreatedAt;