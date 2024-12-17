export const formatDate = (date: Date | string): string => {
  const dateToFormat = date instanceof Date ? date : new Date(date);

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(dateToFormat);
};
