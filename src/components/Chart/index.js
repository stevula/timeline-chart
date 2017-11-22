import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';
import AddEduistModal from '../../containers/AddEduistModal';

const Chart = ({ rows, minYear, maxYear, onClick, isModalOpen }) => {
  const width = 1200;
  const rowHeight = 25;

  return (
    <svg
      baseProfile="full"
      height={rows.length * rowHeight}
      onClick={() => onClick()}
      version="1.1"
      width={width}
      xmlns="http://www.w3.org/2000/svg" >

      <AddEduistModal isOpen={isModalOpen} />

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
    </svg>
  );
};

Chart.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  maxYear: PropTypes.number.isRequired,
  minYear: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  rows: PropTypes.array.isRequired,
};

export default Chart;
