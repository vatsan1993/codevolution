import React from "react";

const Hello = ()=>{

    //Without JSX
    // tag name, properties, child element

    // return React.createElement('div', {id:'hello',className:'dummyClass'},
    //  React.createElement('h1',null,'Hello Srivatsan')
    // )


    // using JSX
    // JSX is Syntactic Sugar. Which helps us to do the same operation as above
    // but different simpler way.
    return (
        <div>
            <h1>Hello Srivatsan</h1>
        </div>
    )


}

export default Hello
