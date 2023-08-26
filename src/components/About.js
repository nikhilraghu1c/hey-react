import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Hey Food App</h2>
      <User name={"Nikhil Raghuwanshi Function"} />
      <UserClass name={"Nikhil Raghuwanshi Class"} location={"Indore M.P."}/>
    </div>
  );
};

export default About;
