import React, { Component } from 'react';

class Eduist extends Component {
  render() {
    return (
      <g transform={`translate(${this.props.x}, 0)`}>
        <rect
          fill="steelblue"
          height={this.props.height}
          stroke="steelblue"
          width={this.props.width} />

        <text y="20" fill="white" fontSize="10">
          {`${this.props.name}: ${this.props.dob} — ${this.props.dod} `}
        </text>
      </g>
    );
  }
}

export default Eduist;
