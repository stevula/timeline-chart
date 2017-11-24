// return timeline minYear and maxYear given the DOBs/DODs of timelineEvents
const getYearBounds = (timelineEvents) => {
  const defaultBounds = { minYear: new Date().getFullYear(), maxYear: 0 };

  return timelineEvents.reduce((bounds, timelineEvent) => {
    const minYear = timelineEvent.birth < bounds.minYear ? timelineEvent.birth : bounds.minYear;
    let maxYear = bounds.maxYear;
    if (timelineEvent.death === -1) {
      maxYear = new Date().getFullYear();
    } else if (timelineEvent.death > maxYear) {
      maxYear = timelineEvent.death;
    }
    return { minYear, maxYear };
  }, defaultBounds);
};

export default getYearBounds;
