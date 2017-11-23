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
  // NOTE: leaving this in the js because it's used to calculate other props
  // could possibly handle in stylesheet if using Sass
  const fontSize = 10;

  const endYear = death === -1 ? '' : death;
  const timelineText = `${name}: ${birth} — ${endYear}`;

  return (
    <g
      className="Eduist"
      data-tip={summary /* used by react-tooltip */ }
      onClick={e => e.stopPropagation()}
      transform={`translate(${translateX}, 0)`} >

      <rect height={height} width={width} >
      </rect>

      <text
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
