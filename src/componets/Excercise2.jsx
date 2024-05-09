import React, { Component } from "react";

export default class Excercise2 extends Component {
  constructor() {
    super();
    this.state = {
      a: 3,
      b: 4,
      sum: (a, b) => a + b,
    };
  }
  render() {
    return (
      <div>
        <p>Tổng của 3+4 là :{this.state.sum(this.state.a, this.state.b)}</p>
      </div>
    );
  }
}
