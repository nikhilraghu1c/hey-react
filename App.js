import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement
// JSX Javascript Syntax - is not html in js
// It is HTML like or XML syntax
// Creates React.createElement using babel

const jsxHeading = (
  <h1 id="heading" className="head" tabIndex="1">
    Hey React Using JSX
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
console.log(jsxHeading);
