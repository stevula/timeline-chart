import React, { Component } from 'react';
import eduists from '../data/eduists.json';
import Row from '../Row';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eduists: eduists.data,
    };
    this.rowHeight = 25;
    this.width = 1200;
    this.removeEduist = this.removeEduist.bind(this);
  }

  render() {
    const rows = this.renderRows(this.state.eduists);

    return <svg
      baseProfile="full"
      height={rows.length * this.rowHeight}
      version="1.1"
      width={this.width}
      xmlns="http://www.w3.org/2000/svg" >
        {rows}
      </svg>;
  }

  getBounds(eduists) {
    const defaultBounds = { min: new Date().getFullYear(), max: 0 };
    return eduists.reduce((bounds, eduist) => {
      const min = eduist.birth < bounds.min ? eduist.birth : bounds.min;
      let max = bounds.max;
      if (eduist.death === -1) {
        max = new Date().getFullYear();
      } else if (eduist.death > max) {
        max = eduist.death;
      }
      return { min, max };
    }, defaultBounds);
  }

  getRows(eduists) {
    return eduists.reduce((rows, eduist) => {
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
  }

  renderRows(eduists) {
    const rowData = this.getRows(eduists)
    const { min, max } = this.getBounds(eduists);
    const scale = this.width / (max - min);
    return rowData.map((rowEduists, rowNumber) => {
      return <Row
        key={rowNumber}
        eduists={rowEduists}
        height={this.rowHeight}
        removeEduist={this.removeEduist}
        scale={scale}
        startYear={min}
        translateY={rowNumber * this.rowHeight} />;
    });
  }

  removeEduist(toDelete) {
    this.setState(prevState => ({
      eduists: prevState.eduists.filter(e => e.name !== toDelete)
    }));
  }
}

export default Chart;
