import React from "react";
import { Component } from "react";
//when default export we can use any name
// import MyComponent from "./components/Greet";

//When using named export we need {} with exact name
import { Greet } from "./components/Greet";

import Welcome from "./components/Welcome";

class App extends Component{
  render() {
    return <div className='App'>
    {/* <MyComponent /> */}
    <Greet />
    <Welcome />
  </div>
  }


}

export default App;
