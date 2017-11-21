import React, { Component } from 'react';
import Eduist from '../Eduist';

class Row extends Component {
  render() {
    return (
      <g transform={`translate(0, ${this.props.y})`}>
        {this.renderEduists()}
      </g>
    );
  }

  renderEduists() {
    return this.props.eduists.map((eduist) => {
      const startPoint = (eduist.birth - this.props.min) * this.props.scale;
      const endPoint = eduist.death === -1 ? (new Date).getFullYear() : eduist.death;
      const width = (endPoint - startPoint) * this.props.scale;
      return <Eduist
        dob={eduist.birth}
        dod={eduist.death}
        height={this.props.height}
        name={eduist.name}
        summary={eduist.summary}
        width={width}
        x={startPoint} />;
    });
  }
}

export default Row;
