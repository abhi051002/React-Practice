import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Chidananda Parida",
        company: "NxtWave",
        location : 'India',
      },
    };
    // console.log(this.props.name+'Component Constructor');
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/abhi051002");

    const json = await data.json();
    this.setState({userInfo:json});
    console.log(this.props.name+'Component Component DID Mount');
  }

  componentDidUpdate(){
    console.log('Update');
  }

  componentWillUnmount(){
    console.log('Unmounted');
  }
  render() {
    console.log(this.props.name+'Component Render');

    const { name, company , location , avatar_url } = this.state.userInfo;
    // debugger;  // This will place a debuuger pause
    return (
      <div>
        <img src={avatar_url} alt={name} />
        <h1 className="about-heading">{name}</h1>
        <h1 className="about-heading">{company}</h1>
        <h1 className="about-heading">{location}</h1>
      </div>
    );
  }
}

export default AboutClass;
