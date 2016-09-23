import React, { Component } from 'react';
import Blog from './blogs';
export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
