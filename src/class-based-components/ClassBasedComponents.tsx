import React, { Component } from "react";
import "../App.css";

import Simple from "./Simple";
import WithProps from "./WithProps";
import WithState from "./WithState";
import WithPropsAndState from "./WithPropsAndState";
class ClassBasedComponents extends Component {
  render() {
    return (
      <section>
        <h1>Class based components</h1>
        <Simple />
        <WithProps name={"World!!!"} />
        <WithState />
        <WithPropsAndState name={"World!!!"} />
        <div className="box">
          <h3>
            Class based components can have state on its own. It does not need
            to use hooks for the same.
          </h3>
        </div>
      </section>
    );
  }
}

export default ClassBasedComponents;
