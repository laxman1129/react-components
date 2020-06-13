import React, { Component } from "react";
import "../App.css";

class WithState extends Component {
  state = { name: "World!!!" };
  render() {
    return (
      <div className="box">
        Hello, {this.state.name}
        <div>This is class based component, with state.</div>
      </div>
    );
  }
}

export default WithState;
