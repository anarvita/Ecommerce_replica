import User from "./User";
import User from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About Class Component</h1>
        {/* <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div> */}
        <h2>This is Namaste React Web Series</h2>
        <User name={"First"} location={"Dehradun "} />
        <User name={"second"} location={"GKP "} />
      </div>
    );
  }
}

export default About;


//Parent Constructor
//Parent Render

//first Constructor
//first render

//second Constructor
//second render

//First component did mound
//second component did mound

//Parent Component did mount

