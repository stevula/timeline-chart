// return array of row arrays containing non-overlapping timelineEvents
const getTimelineEventRows = (timelineEvents) => {
  return timelineEvents
    .sort((a, b) => a.birth - b.birth)
    .reduce((rows, timelineEvent) => {
      let availableRow = rows.find((row) => {
        const latestRowDeath = row[row.length - 1].death;
        return latestRowDeath !== -1 && latestRowDeath < timelineEvent.birth;
      });
      if (!availableRow) {
        availableRow = [];
        rows.push(availableRow);
      }
      availableRow.push(timelineEvent);
      return rows;
    }, []);
};

export default getTimelineEventRows;
