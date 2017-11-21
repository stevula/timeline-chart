import React, { Component } from 'react';
import Eduist from '../Eduist';

class Row extends Component {
  render() {
    return (
      <g
        className="Row"
        transform={`translate(0, ${this.props.translateY + 5})`} >
        {this.renderEduists()}
      </g>
    );
  }

  renderEduists() {
    return this.props.eduists.map((eduist) => {
      const isAlive = eduist.death === -1;
      const startPoint = (eduist.birth - this.props.startYear) * this.props.scale;
      const endPoint = isAlive ? new Date().getFullYear() : eduist.death;
      const width = (endPoint - eduist.birth) * this.props.scale;
      return <Eduist
        key={eduist.name}
        dob={eduist.birth}
        dod={isAlive ? '' : eduist.death}
        height={this.props.height * .85}
        name={eduist.name}
        summary={eduist.summary}
        width={width}
        translateX={startPoint} />;
    });
  }
}

export default Row;
