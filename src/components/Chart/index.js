import React, { Component } from 'react';
import Row from '../Row';

const Chart = ({ rows, minYear, maxYear }) => {
  const width = 1200;
  const rowHeight = 25;

  return <svg
    baseProfile="full"
    height={rows.length * rowHeight}
    version="1.1"
    width={width}
    xmlns="http://www.w3.org/2000/svg" >
      {
        rows.map((rowEduists, rowNumber) => {
          return <Row
            key={rowNumber}
            eduists={rowEduists}
            height={rowHeight}
            scale={width / (maxYear - minYear)}
            startYear={minYear}
            translateY={rowNumber * rowHeight} />;
        })
      }
    </svg>;
};

export default Chart;
