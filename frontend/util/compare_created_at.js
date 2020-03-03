const compareCreatedAt = (a, b) => {
  const dateA = new Date(a.createdAt);
  const dateB = new Date(b.createdAt);
  return dateA < dateB ? 1 : -1;
}

export default compareCreatedAt;