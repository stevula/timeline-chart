import React, { Component } from 'react';

class Row extends Component {
  render() {
    return (
      <rect
        width={this.props.width}
        height={this.props.height}
        y={this.props.y}
        stroke="steelblue"
        strokeWidth="0.5"
        fill="transparent">
      </rect>
    );
  }
}

export default Row;
