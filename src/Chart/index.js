import React, { Component } from 'react';
import eduists from '../data/eduists.json';
import Row from '../Row';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eduists: eduists.data,
      rows: this.getRows(eduists.data)
    };
    this.rowHeight = 25;
    this.width = 680;
  }

  render() {
    return <svg
      baseProfile="full"
      height={this.state.rows.length * this.rowHeight}
      version="1.1"
      width={this.width}
      xmlns="http://www.w3.org/2000/svg">
        {this.renderRows(this.state.rows)}
      </svg>;
  }

  getBounds(eduists) {
    let min = new Date().getFullYear();
    let max = 0;
    eduists.forEach((person) => {
      if (person.birth < min) {
        min = person.birth;
      }
      if (person.death === -1) {
        max = new Date().getFullYear();
      } else if (person.death > max) {
        max = person.death;
      }
    });
    return { min, max };
  }

  getRows(eduists) {
    const rows = [];
    eduists.forEach((eduist) => {
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

  renderRows(rowData) {
    const { min, max } = this.getBounds(this.state.eduists);
    const scale = this.width / (max - min);
    return rowData.map((rowEduists, rowNumber) => {
      return <Row
        key={rowNumber}
        eduists={rowEduists}
        height={this.rowHeight}
        scale={scale}
        startYear={min}
        translateY={rowNumber * this.rowHeight} />;
    });
  }
}

export default Chart;
