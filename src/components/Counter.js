import React, { Component } from "react";

class Counter extends Component {
  state = {
    gender: "",
  };
  wish = (e) => {
    this.setState({
      gender: e.target.name,
    });
  };

  render() {
    return (
      <div>
        <h1>
          welcome{" "}
          {this.state.gender && (this.state.gender == "male" ? "Sir" : "Madam")}
        </h1>

        <button name="male" onClick={this.wish}>
          {" "}
          male
        </button>
        <button name="female" onClick={this.wish}>
          female
        </button>
      </div>
    );
  }
}
export default Counter;
