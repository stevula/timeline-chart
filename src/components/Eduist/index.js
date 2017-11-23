import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Eduist = ({
  birth,
  death,
  height,
  name,
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
      data-tip={summary /* used by react-tooltip */ }
      onClick={e => e.stopPropagation()}
      transform={`translate(${translateX}, 0)`} >

      <rect
        fill={blue}
        height={height}
        rx={cornerRadius}
        ry={cornerRadius}
        width={width}>
      </rect>

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
        x={width - fontSize * 1.5}
        y={height * 2/3}>
        ✕
      </text>
    </g>
  );
};

Eduist.propTypes = {
  birth: PropTypes.number.isRequired,
  death: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  summary: PropTypes.string.isRequired,
  translateX: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Eduist;
