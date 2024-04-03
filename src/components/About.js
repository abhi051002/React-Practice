import AboutClass from "./AboutClass";
import { Component } from "react";

class About extends Component {
  constructor(props){
    super(props);
    // console.log('Parent Constuctor');
  }

  componentDidMount(){
    // console.log('Parent Componet Did Mount');
  }

  render() {
    // console.log('Parent Render');
    return (
      <div>
        <AboutClass name={"First (Class)"} location={"Odisha"} />
      </div>
    );
  }
}

export default About;
