import React, { Component } from 'react';

class Eduist extends Component {
  render() {
    const blue = 'rgb(29, 169, 224)';
    const cornerRadius = '3';
    const fontSize = 10;

    return (
      <g transform={`translate(${this.props.translateX}, 0)`}>
        <rect
          fill={blue}
          height={this.props.height}
          rx={cornerRadius}
          ry={cornerRadius}
          width={this.props.width} />

        <text
          fill="white"
          fontSize={fontSize}
          y={this.props.height * 2/3}
          x={fontSize} >
          {`${this.props.name}: ${this.props.dob} — ${this.props.dod}`}
        </text>

        <text
          style={{ cursor: 'pointer' }}
          fontSize={fontSize}
          onClick={this.props.handleClick}
          aria-label="Remove"
          role="button"
          x={this.props.width - fontSize * 2}
          y={this.props.height * 2/3}>
          ✕
        </text>
      </g>
    );
  }
}

export default Eduist;
