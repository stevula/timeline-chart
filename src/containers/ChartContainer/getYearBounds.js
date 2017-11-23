// return minYear and maxYear given the DOBs/DODs of eduists
const getYearBounds = (eduists) => {
  const defaultBounds = { minYear: new Date().getFullYear(), maxYear: 0 };

  return eduists.reduce((bounds, eduist) => {
    const minYear = eduist.birth < bounds.minYear ? eduist.birth : bounds.minYear;
    let maxYear = bounds.maxYear;
    if (eduist.death === -1) {
      maxYear = new Date().getFullYear();
    } else if (eduist.death > maxYear) {
      maxYear = eduist.death;
    }
    return { minYear, maxYear };
  }, defaultBounds);
};

export default getYearBounds;
