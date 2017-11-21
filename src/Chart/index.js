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
      baseProfile="full"
      height={this.state.rows.length * this.rowHeight}
      version="1.1"
      width={this.width}
      xmlns="http://www.w3.org/2000/svg">
        {this.renderRows()}
      </svg>;
  }

  // this can be optimized but benefit would be trivial for n <= 50
  getBounds() {
    const earliestBirth = this.eduists[0].birth;
    const latestDeath = this.eduists.reduce((dod, person) => {
      if (person.death === -1) return (new Date).getFullYear();
      if (person.death > dod) return person.death;
    }, 0);
    return { min: earliestBirth, max: latestDeath };
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

  renderRows() {
    const { min, max } = this.getBounds();
    const scale = this.width / (max - min);
    return this.state.rows.map((rowData, rowNumber) => {
      return <Row
        eduists={rowData}
        height={this.rowHeight}
        max={max}
        min={min}
        scale={scale}
        width={this.width}
        y={rowNumber * this.rowHeight} />;
    });
  }
}

export default Chart;
