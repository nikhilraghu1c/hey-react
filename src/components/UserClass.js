import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        login: "Default",
      },
    };
    // console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child CDM");
    const data = await fetch("https://api.github.com/users/nikhilraghu1c");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    // console.log(this.props.name + " Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
