import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import formatEventText from './formatEventText';

// a timeline event presenting info on individual's lifespan and accomplishments
const TimelineEvent = ({
  birth,
  death,
  height,
  name,
  onClickRemove,
  summary,
  translateX,
  width,
}) => {
  // NOTE: fontSize not in css because it's used to calculate SVG attrs
  const fontSize = 10;

  return (
    <g
      className="TimelineEvent"
      data-tip={summary /* used by react-tooltip */ }
      onClick={e => e.stopPropagation()  /* prevent Chart click event */}
      transform={`translate(${translateX}, 0)`} >

      <rect height={height} width={width} ></rect>

      <text
        fontSize={fontSize}
        y={height * 2/3}
        x={fontSize} >
        {formatEventText(name, birth, death)}
      </text>

      <text
        aria-label="Remove"
        className="button"
        fontSize={fontSize}
        onClick={() => onClickRemove(name)}
        role="button"
        style={{ cursor: 'pointer' }}
        x={width - fontSize * 1.5}
        y={height * 2/3}>
        ✕
      </text>
    </g>
  );
};

TimelineEvent.propTypes = {
  birth: PropTypes.number.isRequired,
  death: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  summary: PropTypes.string.isRequired,
  translateX: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default TimelineEvent;
