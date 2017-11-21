import React, { Component } from 'react';
import eduists from '../data/eduists.json';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.eduists = eduists.data.sort((a, b) => a.birth - b.birth);
  }

  render() {
    this.getRows();
    return <svg
      version="1.1"
      baseProfile="full"
      width="800"
      height="300"
      xmlns="http://www.w3.org/2000/svg"></svg>;
  }

  // this can be optimized but benefit would be trivial for n <= 50
  getBounds() {
    const earliestBirth = this.eduists[0].birth;
    const latestDeath = this.eduists.reduce((dod, person) => {
      if (person.death === -1) return person.death;
      if (person.death > dod) return person.death;
    }, 0);
    return [earliestBirth, latestDeath]
  }

  getRows() {
    const rows = [];
    this.eduists.forEach((eduist) => {
      let availableRow = rows.find((row) => {
        const latestRowDeath = row[row.length - 1].death;
        return latestRowDeath !== -1 && latestRowDeath < eduist.birth;
      });
      if (!availableRow) {
        availableRow = [];
        rows.push(availableRow);
      }
      availableRow.push(eduist);
    });
    return rows;
  }
}

export default Chart;
