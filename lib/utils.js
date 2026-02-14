export function getYearsOfExperience() {
  const startDate = new Date(2019, 6, 1); // July 2019
  const now = new Date();
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
  return Math.floor((now - startDate) / msPerYear);
}

export function formatDate(dateString) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString));
}
