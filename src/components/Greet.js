import React, { Component } from "react";

class Greet extends Component {
  state = {
    list: [
      {
        name: "seshu",
        age: "22",
        gender: "male",
      },
      {
        name: "ramesh",
        age: "24",
        gender: "male",
      },
      {
        name: "chitti",
        age: "12",
        gender: "female",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>{this.state.list[0].name}</h1>
      </div>
    );
  }
}
export default Greet;
