import React, { Component } from 'react';

class Eduist extends Component {
  render() {
    return (
      <rect
        fill="steelblue"
        height={this.props.height}
        stroke="steelblue"
        width={this.props.width}
        x={this.props.x} />
    );
  }
}

export default Eduist;
