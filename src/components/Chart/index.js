import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import Row from '../Row';
import ModalForm from '../../containers/ModalForm';

// chart that displays events on a timeline
const Chart = ({ rows, minYear, maxYear, onClick, isFormModalOpen }) => {
  const width = 1200;
  const rowHeight = 25;

  return (
    <div>
      <ReactTooltip
        className="ReactTooltip"
        data-multiline={true} />
      <svg
        baseProfile="full"
        height={rows.length * rowHeight}
        onClick={onClick}
        version="1.1"
        width={width}
        xmlns="http://www.w3.org/2000/svg" >

        <ModalForm isOpen={isFormModalOpen} />

        {
          rows.map((rowEvents, rowNumber) => {
            return <Row
              key={rowNumber}
              timelineEvents={rowEvents}
              height={rowHeight}
              scale={width / (maxYear - minYear)}
              startYear={minYear}
              translateY={rowNumber * rowHeight} />;
          })
        }
      </svg>
    </div>
  );
};

Chart.propTypes = {
  isFormModalOpen: PropTypes.bool.isRequired,
  maxYear: PropTypes.number.isRequired,
  minYear: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  rows: PropTypes.array.isRequired,
};

export default Chart;
