// return array of row arrays containing eduists
const getEduistRows = (eduists) => {
  return eduists
    .sort((a, b) => a.birth - b.birth)
    .reduce((rows, eduist) => {
      let availableRow = rows.find((row) => {
        const latestRowDeath = row[row.length - 1].death;
        return latestRowDeath !== -1 && latestRowDeath < eduist.birth;
      });
      if (!availableRow) {
        availableRow = [];
        rows.push(availableRow);
      }
      availableRow.push(eduist);
      return rows;
    }, []);
};

export default getEduistRows;
