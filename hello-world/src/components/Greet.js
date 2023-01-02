import React from "react";

//named export
// export const Greet=()=>{
//     return <h1>Hello Srivatsan</h1>
// }

//default export
// const Greet=()=>{
//     return <h1>Hello Srivatsan</h1>
// }

// export default Greet


// functional component using props
// const Greet=(props)=>{
//     return <div>
//         <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//         {props.children}
//     </div>
// }


//prop destructuring
// const Greet=({name,heroName, children})=>{
//     return <div>
//         <h1>Hello {name} a.k.a {heroName}</h1>
//         {children}
//     </div>
// }

const Greet=(props)=>{
    // another way to destructure props
    const {name,heroName, children}= props
        return <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {children}
        </div>
    }

export default Greet
