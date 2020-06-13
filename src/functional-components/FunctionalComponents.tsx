import React from "react";
import Simple from "./Simple";
import WithProps from "./WithProps";

const FunctionalComponents = () => (
  <section>
    <h1>Functional components</h1>
    <Simple />
    <WithProps name={"World!!!"} />
    <div className="box">
      <h3>
        Functional components cannot have state on its own. It needs to use
        hooks for the same.
      </h3>
    </div>
  </section>
);

export default FunctionalComponents;
