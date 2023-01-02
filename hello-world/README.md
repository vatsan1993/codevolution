creating first app-

npx create-react-app foldername

npx- node package runner

npm start --run project

JSX is Syntactic Sugar. Which helps us to do the same operation as creating components using React.createElement but different simpler html like syntax.
{} are needed to write the js code inside JSX

props- message sent from one component to another component.
we can send child components in a prop aswell.
This is done so that if most of the contents stays same but there are some differences, those difference can be sent as children.
We use props.value and props.children in functional components and class component uses this.props.value and this.props.children

state- memory within the components.
functional components use useState hook
class components use this.state

setState is async method . So log statements will execute before . To run a function after setState we can send the function as second parameter to setState method.

React Groups multiple setState methods and considers as a singe call.which will give weird results. so we pass an arrow function to the setState that return another object. This callback function will have access to previous state and the second value is props. If the state changes based on the props we can update it here

props and states can be destructured.

Event Handling and binding.
In class components we need to bind the events as the this keyword acts weirdly
Check how this keyword work in js
