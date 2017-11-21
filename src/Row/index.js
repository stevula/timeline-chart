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
      // const width = (eduist.death - eduist.birth) * this.props.scale;
      const width = '500'
      return <Eduist
        height={this.props.height}
        width={width}
        x={startPoint} />;
    });
  }
}

export default Row;
