import React from 'react';
import PropTypes from 'prop-types';

const Eduist = ({
  dob,
  dod,
  height,
  name,
  onClickRemove,
  translateX,
  width,
}) => {
  const blue = 'rgb(29, 169, 224)';
  const cornerRadius = '3';
  const fontSize = 10;

  const endYear = dod === -1 ? '' : dod;
  const timelineText = `${name}: ${dob} — ${endYear}`;

  return (
    <g transform={`translate(${translateX}, 0)`} >
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
        aria-label="Remove"
        fontSize={fontSize}
        onClick={() => onClickRemove(name)}
        role="button"
        style={{ cursor: 'pointer' }}
        x={width - fontSize * 2}
        y={height * 2/3}>
        ✕
      </text>
    </g>
  );
};

Eduist.propTypes = {
  dob: PropTypes.number.isRequired,
  dod: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  translateX: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Eduist;
