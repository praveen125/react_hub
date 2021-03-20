import React, { Component } from "react";

class Form extends Component {
  state = {
    text: "",
    list: ["praveen", "naidu", "swadesh"],
    currentId: -1,
  };
  onChange = (e) => {
    this.setState({ text: e.target.value });
    console.log(this.state.text);
  };
  onSubmit = () => {
    if (this.state.currentId == -1) {
      this.setState({ list: [...this.state.list, this.state.text], text: "" });
    } else {
      let newList = this.state.list.map((person, i) =>
        i == this.state.currentId ? this.state.text : person
      );
      this.setState({ list: newList, text: "" });
    }
  };
  onUpdate = (e) => {
    this.setState({ text: e.target.name, currentId: e.target.id });
  };
  onDisplay = (e) => {
    this.setState({
      list: this.state.list.filter((person, i) => i != e.target.id),
    });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange} value={this.state.text} />
        <button onClick={this.onSubmit}>submit</button>
        <div>
          <tabel>
            <tr>
              <th>slno</th>
              <th>name</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
            {this.state.list.map((person, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{person}</td>

                <td>
                  <button name={person} id={i} onClick={this.onUpdate}>
                    Edit
                  </button>
                </td>
                <td>
                  <button name={person} id={i} onClick={this.onDisplay}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tabel>
        </div>
      </div>
    );
  }
}
export default Form;
