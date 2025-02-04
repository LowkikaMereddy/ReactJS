// import React from "react";

// class Child extends React.Component {
//     render() {
//         const { username, rollno, branch, batch, dob } = this.props.obj;
//         return (
//             <>
//                 <h1>My name is {username}</h1>
//                 <h2>I am in my third year.</h2>
//                 <h2>I am 19 years old.</h2>
//                 <h2>Roll No: {rollno}</h2>
//                 <h2>branch: {branch}</h2>
//                 <h2>batch: {batch}</h2>
//                 <h2>dOb: {dob}</h2>
//             </>
//         );
//     }
// }

// export default Child;

// import React from 'react'

// const Child = (props) => {
//     console.log(props);
//     let {name , id , designation} = props.obj
//   return (
//     <div>
//         {/* <h1>my name is {props.name}</h1> */}
//         {/* <h1>the id is {props.id}</h1> */}
//         {/* {
//           props.arr.map((x) => {
//             return (
//               <li>{x}</li>
//             )
//           })
//         } */}
//         <h1>{name} , {id} , {designation}</h1>
//     </div>
//   )
// }

// export default Child
import React from 'react'

const Child = (props) => {
  return (
    <div>
        <button onClick={() => props.fun()} >click</button>
    </div>
  )
}

export default Child

