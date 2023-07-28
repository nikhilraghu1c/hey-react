/**
 * Nested Structure & Sibling For React HTML
 * <div id='parent'>
 *      <div id='child'>
 *          <h1>I'm an H1 Tag</h1>
 *          <h2>I'm an H2 Tag </h2>
 *      </div>
 * </div>
 * ReactElement(Object) => Converts Into HTML (Browser Understand) using render function
 * For Sibling you will pass 3rd parameter as array
 */

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