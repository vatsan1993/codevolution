import React from "react";
import { Component } from "react";
//when default export we can use any name
// import MyComponent from "./components/Greet";

//When using named export we need {} with exact name
import { Greet } from "./components/Greet";

import Welcome from "./components/Welcome";
import Hello from './components/Hello'

class App extends Component{
  render() {
    return <div className='App'>
    {/* <MyComponent /> */}
    {/* normal components */}
    {/* <Greet />
    <Welcome /> */}
    <Hello/>

  </div>
  }


}

export default App;
