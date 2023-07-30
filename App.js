import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
  <h1 id="heading" className="head" tabIndex="1">
    Hey React Using JSX
  </h1>
);

// React Functional Component
// Return JSX/ React Element
// First letter of function should be Capital

const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading">Hey React Functional Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
