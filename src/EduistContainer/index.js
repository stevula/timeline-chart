import React, { Component } from 'react';
import Eduist from '../Eduist';

class EduistContainer extends Component {
  render() {
    return <Eduist
        dob={this.props.dob}
        dod={this.props.dod}
        height={this.props.height}
        name={this.props.name}
        handleClick={this.props.handleClick}
        width={this.props.width}
        translateX={this.props.translateX} />;
  }

  renderSummary() {
    this.props.summary
  }
}

export default EduistContainer;
