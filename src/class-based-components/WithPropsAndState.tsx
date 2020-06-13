import React, { Component } from "react";
import "../App.css";

interface DemoProps {
  name: string;
}
interface DemoState {
  greeting: string;
}

class WithPropsAndState extends Component<DemoProps, DemoState> {
  constructor(props: DemoProps) {
    super(props);
    //try adding new field in the state.
    this.state = { greeting: "Hello, " };
  }
  render() {
    return (
      <div className="box">
        {this.state.greeting} {this.props.name}
        <div>This is class based component, with props and state.</div>
      </div>
    );
  }
}

export default WithPropsAndState;
