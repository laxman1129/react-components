import React from "react";
import "../App.css";

interface DemoProps {
  name: string;
}

const WithProps = (props: DemoProps) => (
  <div className="box">
    Hello, {props.name}
    <div >This is Functional component, with props.</div>
  </div>
);

export default WithProps;
