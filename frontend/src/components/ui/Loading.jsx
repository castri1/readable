import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return this.props.isLoading ? (<div className="loading">Loading&#8230;</div>) : null;
  }
}

export default Loading;