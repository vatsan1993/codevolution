import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state= {
            count:0

        }
    }

    //increment with a problem
    // increment(){
    //     this.setState({
    //         count: this.state.count+1
        // }, ()=>{
        //     console.log(this.state.count);
        // })
    // }

    // better way of setting a state
    increment(){
        this.setState(prevState=>{
            return {count:prevState.count+1}
        },()=>{
                console.log(this.state.count);
            }
        )
    }

     // changing state using the props
    //  increment(){
    //     this.setState((prevState,props)=>{
    //         return {count:prevState.count+props.value}
    //     },()=>{
    //             console.log(this.state.count);
    //         }
    //     )
    // }
    // complex variant of set state which might give a problem
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
        <div>
            <div>
                count: {this.state.count}
            </div>
            {/* normal setstate */}
            {/* <button onClick={()=>{this.increment()}}>Increment</button> */}
            {/* complex Set state */}
            <button onClick={()=>{this.incrementFive()}}>Increment</button>
        </div>
        )
    }
}

export default Counter
