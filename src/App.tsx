import React from "react";
import "./App.css";

import ClassBasedComponents from "./class-based-components/ClassBasedComponents";
import FunctionalComponents from "./functional-components/FunctionalComponents";

const App = () => {
  return (
    <div>
      <div className="left-align">
        <ClassBasedComponents/>
      </div>
      <div className="right-align">
        <FunctionalComponents />
      </div>
    </div>
  );
};

export default App;
