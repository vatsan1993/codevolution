import React from "react";
import { Component } from "react";
//when default export we can use any name
// import MyComponent from "./components/Greet";

//When using named export we need {} with exact name
// import { Greet } from "./components/Greet";

import Welcome from "./components/Welcome";
import Hello from './components/Hello'
import Greet  from './components/Greet'
class App extends Component{
  render() {
    return <div className='App'>
    {/* <MyComponent /> */}
    {/* normal components */}
    {/*
    <<Greet  />
    <Welcome /> */}
    {/* <Hello/> */}

    {/* using Greet component multiple times with props and chidren */}
    <Greet name='Bruce' heroName='Batman'>
      <p>The Greatest Super hero ever</p>
    </Greet>
    <Greet name='Clark'heroName='Superman'>
      <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fbloody-disgusting.com%2Fwp-content%2Fuploads%2F2019%2F05%2Fevil-superman-2.jpg%3Fresize%3D1000%252C600%26ssl%3D1&imgrefurl=https%3A%2F%2Fbloody-disgusting.com%2Fcomics%2F3562916%2Fbrightburn-eight-times-actual-superman-turned-evil%2F&tbnid=al5O9wMKg6elBM&vet=12ahUKEwj8yvi-4KL8AhXaLbcAHU5YB0gQMygAegUIARDeAQ..i&docid=l-Rt5b5Fn53a2M&w=1000&h=600&q=superman%20evil&client=ubuntu&ved=2ahUKEwj8yvi-4KL8AhXaLbcAHU5YB0gQMygAegUIARDeAQ">Click Me</a>
      </Greet>
    <Greet name='Diana' heroName='Wonder Woman'/>

    <Welcome name='Bruce' heroName='Batman'/>
    <Welcome name='Clark'heroName='Superman'></Welcome>
    <Welcome name='Diana' heroName='Wonder Woman'/>
  </div>
  }


}

export default App;
