import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child1" }, [
            React.createElement("h1", {}, "I'm an H1 Tag"),
            React.createElement("h2", {}, "I'm an H2 Tag")
        ]),
        React.createElement("div", { id: "child2" }, [
            React.createElement("h3", {}, "I'm an H3 Tag"),
            React.createElement("h4", {}, "I'm an H4 Tag")
        ])
    ]
);

// const heading = React.createElement("h1", { id: 'heading', style: { color: 'blue' } }, "Hello World From React!!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);