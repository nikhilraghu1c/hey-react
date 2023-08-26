import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child CDM");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log("Child Render");

    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increment
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @nikhilraghu1c</h4>
      </div>
    );
  }
}

export default UserClass;
