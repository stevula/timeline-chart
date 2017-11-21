import React, { Component } from 'react';
import eduists from '../data/eduists.json';
import Row from '../Row';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.eduists = eduists.data.sort((a, b) => a.birth - b.birth);
    this.state = { rows: this.getRows() };
    this.rowHeight = 25;
    this.width = 1000;
  }

  render() {

    return <svg
      version="1.1"
      baseProfile="full"
      width={this.width}
      height={this.state.rows.length * this.rowHeight}
      xmlns="http://www.w3.org/2000/svg">
        {this.mapRows()}
      </svg>;
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

  mapRows() {
    return this.state.rows.map((rowData, rowNumber) => {
      return <Row
        height={this.rowHeight}
        y={rowNumber * 25}
        width={this.width}
        eduists={rowData} />
    })
  }
}

export default Chart;
