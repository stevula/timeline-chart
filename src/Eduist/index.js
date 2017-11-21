import React, { Component } from 'react';

class Eduist extends Component {
  render() {
    const blue = 'rgb(29, 169, 224)';
    return (
      <g className="Eduist" transform={`translate(${this.props.translateX}, 0)`}>
        <rect
          fill={blue}
          height={this.props.height}
          stroke={blue}
          width={this.props.width} />

        <text y="15" fill="white" fontSize="10">
          {`${this.props.name}: ${this.props.dob} — ${this.props.dod}`}
        </text>
      </g>
    );
  }
}

export default Eduist;
