# hey-react
Just to learn the react all concepts


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Build (.parcel-cache)
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support older browsers
- Diagnostics & Error handling with good error suggestion
- Hoisting (HTTPS)
- Tree Shaking - Remove unused code 
- Different  dev and prod bundles

# Babel
- Transpiler (Make Code Browser Compatible)
- Transform Syntax
- Converts JSX Into HTML (Browser Compatible)

# JSX
- Javascript Syntax, Javascript XML, HTML Like Syntax
- Syntax Extension To Javascript
- Not a valid JS, JS Engines don't understand JSX
- Parcel Transpiling it using babel which JS Engine understand
- Addition to React which is used to merge HTML with JS
- JSX creates a React.createElement through Babel (JS Compiler)
- CamelCase Attribute
- Use parenthesis () for multiple line code
- Follows XML rules , So HTML Elements must be properly closed
- JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.
- Sanitizes Injection Attack

# React Component
- Class Based Component
    - Normal JS Class which extends React.Component includes render method inside it which returns JSX.
    - TO get props, Need to create constructor with props paramerte including super(props) inside it.
    - super() use to access variable of parent class
    - super(props) use to get this.props inside the constructor else it will be undefined.
    - this.state = {count: 1} inside constructor to create the state variable in component
    - Never update state variable directly, this.setState is used to update the state variables (Only update the value which is passed inside the object) 
    - Life Cycle (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
        - Constructor (Render Phase)
        - Render (Render Phase)
        - ComponentDidMount (Commit Phase)
            - Called Only when the component completely mounted
            - Use to write logic after mounting like api call
            - React do first render phase for all childrens then do the commit phase 
        - ComponentDidUpdate (Commit Phase)
            - Call when update happens & component rerender the component then call this
        - ComponentWillUnmount (Commit Phase)
            - Call before component is going to unmount/destroy
- Functional Component
    - Normal JS function which return JSX
    - Function first letter should be capital
    - To render component use selector syntax (<ComponentName />) inside render function
    - Component Composition (Component Inside Component)

# Virtual Dom 
# Reconciliation
# React Fiber

# Export / Import
 - Default (Only one in the file)
    - export default <Component>
    - import <Component> from <path>

 - Named (Multiple in the file)
    - export const Component
    - import { <Component> } from <path>

# React Hooks
- Normal JS Utility Functions
- State Variable
- 2 Imp Hooks
    - useState() 
        - Create Superpowerful state variables in react
        - Send updates to react to update the dom when variable changes
        - When change in local state variable, react re-rendered the component
        - Call only inside the body of component
        - Never use useState variable inside conditions/loop/functions
    - useEffect() -
        - Takes 2 arugument
            1. Arrow Function, 
            2. Dependencies Array
                a. No dependency array, useEffect called after every render
                b. If Empty dependency array, then useEffect called only once at initial
                c. If Array has dependency then use effect called only when dependency changes
                d. if you return function from it , it will call when component will unmount
        - Called After Body Rendered
        - Use to fetch data from api
        - we can use multiple use effects.
        - useEffect can't be async because it expect function or nothing not the promise which is returned by async

# React Router Dom
- createBrowserRouter use to define path
- Router Provider (Component) use to provide route config to app
- useRouteError use to provide info about the route error
- Outlet component use to load route children 
- Link Component use to navigate from one route to another
- Single page application works on client side routing
- For Dynamic routes you can use :resId inside route path
- useParams hook use to get the param from url

# Hey Food App
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restro Container
 *    - Restro Card (Img, Name Of Res, Star Rating, Cuisine , delivery time etc)
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
