import React, { Component } from "react";
import "../App.css";

// try without props
export interface DemoProps {
  name: string;
}
// try without generics
class WithProps extends Component<DemoProps> {
  //try without type
  constructor(props: DemoProps) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        Hello, {this.props.name}
        <div>This is class based component, with props.</div>
      </div>
    );
  }
}

export default WithProps;
