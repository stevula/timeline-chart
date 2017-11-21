import React, { Component } from 'react';
import EduistContainer from '../../containers/EduistContainer';

const Row = ({
  eduists,
  height,
  scale,
  startYear,
  translateY
}) => {
  return (
    <g transform={`translate(0, ${translateY + 5})`} >
      {
        eduists.map((eduist) => {
          const isAlive = eduist.death === -1;
          const endYear = isAlive ? new Date().getFullYear() : eduist.death;

          return <EduistContainer
            key={eduist.name}
            dob={eduist.birth}
            dod={isAlive ? '' : eduist.death}
            height={height * .85}
            name={eduist.name}
            summary={eduist.summary}
            width={(endYear - eduist.birth) * scale}
            translateX={(eduist.birth - startYear) * scale} />;
        })
      }
    </g>
  );
};

export default Row;
