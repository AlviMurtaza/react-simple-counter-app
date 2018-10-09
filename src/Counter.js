import React, { Component, Fragment } from "react";

export default class Counter extends Component {
  state = {
    value: 10,
    title: 'Simple Counter App'
  }

  incrementNum = () => {
    let value = this.state.value;

    value = value + 1;
    this.setState( {
      value: value
    })
  }

  decrementNum = () => {
    let value = this.state.value;

    value = value - 1;
    this.setState( {
      value: value
    })
  }

  render() {
    let value = this.state.value;
    let title = this.state.title;

    return (
      <Fragment>
        <h1>{title}</h1>
        <button onClick={this.decrementNum}><span role="img" aria-label="Heavy Minus">➖</span></button>
          &nbsp;
          {value}
          &nbsp;
        <button onClick={this.incrementNum}><span role="img" aria-label="Heavy Plus">➕</span></button>
      </Fragment>
    );
  }
}
