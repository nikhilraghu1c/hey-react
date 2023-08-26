import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent CDM");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Hey Food App</h2>
        <UserClass name={"First"} location={"Indore M.P."} />
      </div>
    );
  }
}

export default About;
