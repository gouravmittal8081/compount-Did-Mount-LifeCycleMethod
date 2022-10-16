import "./styles.css";
import React from "react";
/*
Use of componentDidMount method
Make Class component
No Effect of state and props
*/
export default class App extends React.Component {
  // constructor sabse pehle call hota hai
  constructor() {
    super();
    this.state = {
      name: "gourav"
    };
    // console.log("constructor");
  }

  //  yha ye wala componentDidMount constructor or render kebad call hoga kyuki ye HTML ke complete read hone ke bad hi work karta hai
  componentDidMount() {
    console.log("componentDidMount");
  }

  // constructor run hone ke bad ye wala render call hoga or iske bad coponentDidMount call hoga
  render() {
    console.log("render");
    return (
      <div className="App">
        <h3> Hello {this.state.name}</h3>
        <h6> compount-Did-Mount-LifeCycleMethod</h6>
        <button onClick={() => this.setState({ name: "Mittal" })}>
          Update name
        </button>
      </div>
    );
  }
}
