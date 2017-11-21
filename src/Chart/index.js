import React, { Component } from 'react';
import eduists from '../data/eduists.json';
import Row from '../Row';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.eduists = eduists.data;
    this.state = { rows: this.getRows() };
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
        {this.renderRows()}
      </svg>;
  }

  getBounds() {
    let min = new Date().getFullYear();
    let max = 0;
    this.eduists.forEach((person) => {
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
    return this.state.rows.map((rowEduists, rowNumber) => {
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
