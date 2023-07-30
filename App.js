import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading" className="head" tabIndex="1">
    Hey React Title
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <h2>{(num = 10)}</h2>
    <Title />
    <h1 className="heading">Hey React Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
