// returns a string with formatted name and lifespan
const formatEventText = (name, birthYear, deathYear) => {
  const endYear = deathYear === -1 ? '' : deathYear;
  return `${name}: ${birthYear} — ${endYear}`;
};

export default formatEventText;
