import React from 'react';
import PropTypes from 'prop-types';
import TimelineEventContainer from '../../containers/TimelineEventContainer';

// a row of non-overlapping timeline events
const Row = ({
  height,
  scale,
  startYear,
  timelineEvents,
  translateY
}) => {
  return (
    <g transform={`translate(0, ${translateY + 5})`} >
      {
        timelineEvents.map((timelineEvent) => {
          const isAlive = timelineEvent.death === -1;
          const endYear = isAlive ? new Date().getFullYear() : timelineEvent.death;

          return <TimelineEventContainer
            key={timelineEvent.name}
            birth={timelineEvent.birth}
            death={timelineEvent.death}
            height={height * .85}
            name={timelineEvent.name}
            summary={timelineEvent.summary}
            translateX={(timelineEvent.birth - startYear) * scale}
            width={(endYear - timelineEvent.birth) * scale} />;
        })
      }
    </g>
  );
};

Row.propTypes = {
  height: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  startYear: PropTypes.number.isRequired,
  timelineEvents: PropTypes.array.isRequired,
  translateY: PropTypes.number.isRequired,
};

export default Row;
