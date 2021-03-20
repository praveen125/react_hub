import React, { Component } from "react";

class Slider extends Component {
  state = {
    i: 0,
    list: ["ganesh", "suresh", "vinodh", "vijay"],
  };

  onPreviousChange = () => {
    if (this.state.i > 0) {
      this.setState({ i: this.state.i - 1 });
    }
  };
  onNextChange = () => {
    if (this.state.i < this.state.list.length - 1) {
      this.setState({ i: this.state.i + 1 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.onPreviousChange}>previous</button>{" "}
        <h1>{this.state.list[this.state.i]}</h1>
        <button onClick={this.onNextChange}>next</button>
      </div>
    );
  }
}
export default Slider;
