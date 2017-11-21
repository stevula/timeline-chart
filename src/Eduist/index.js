import React, { Component } from 'react';

class Eduist extends Component {
  render() {
    const color = 'steelblue';
    return (
      <g className="Eduist" transform={`translate(${this.props.x}, 0)`}>
        <rect
          fill={color}
          height={this.props.height}
          stroke={color}
          width={this.props.width} />

        <text y="15" fill="white" fontSize="10">
          {`${this.props.name}: ${this.props.dob} — ${this.props.dod} `}
        </text>
      </g>
    );
  }
}

export default Eduist;
