import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import Summary from '../../components/Summary';

const Eduist = ({
  birth,
  death,
  height,
  isSummaryOpen,
  name,
  onMouseEnter,
  onMouseLeave,
  onClickRemove,
  summary,
  translateX,
  width,
}) => {
  const blue = 'rgb(29, 169, 224)';
  const cornerRadius = '3';
  const fontSize = 10;

  const endYear = death === -1 ? '' : death;
  const timelineText = `${name}: ${birth} — ${endYear}`;

  return (
    <g
      className="Eduist"
      transform={`translate(${translateX}, 0)`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave} >
      <rect
        fill={blue}
        height={height}
        rx={cornerRadius}
        ry={cornerRadius}
        width={width} />

      <text
        fill="white"
        fontSize={fontSize}
        y={height * 2/3}
        x={fontSize} >
        {timelineText}
      </text>

      <text
        className="button"
        aria-label="Remove"
        fontSize={fontSize}
        onClick={(e) => {
          e.stopPropagation();
          onClickRemove(name)
        }}
        role="button"
        style={{ cursor: 'pointer' }}
        x={width - fontSize * 2}
        y={height * 2/3}>
        ✕
      </text>

      <Summary isOpen={isSummaryOpen} text={summary} />
    </g>
  );
};

Eduist.propTypes = {
  birth: PropTypes.number.isRequired,
  death: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isSummaryOpen: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  summary: PropTypes.string.isRequired,
  translateX: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Eduist;
