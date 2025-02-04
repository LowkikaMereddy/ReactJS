// import React from "react"
// import Child from "./Child"
// class Parent extends React.Component{
//     obj = {
//         username : "Lowkika Mereddy",
//         rollno : "2211CS010371",
//         branch : "CSE",
//         batch :"2022-2026",
//         dob:"27-11-2005"

//     };

//     render(){
//         return (
//             <>
//               <Child obj = {this.obj.username}/>
//             </>
//         );
//     }
// }
// export default Parent;

// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   let obj1 = {
//     name : "abc" ,
//     id : 1 ,
//     designation : "developer"
//   }
//   return (
//     <div>
//         {/* <Child  name = "abhi" /> */}
//         {/* <Child id = {10} /> */}
//         {/* <Child arr = {[10, 20 ,30 , 40]}/> */}
//         <Child obj = { obj1 } />
//     </div>
//   )
// }

// export default Parent

import React from 'react'
import Child from './Child'

const Parent = () => {
  let demo = () => {
    window.alert("iam arrow function")
  }
  return (
    <>
      <Child fun = {demo} />
    </>
  )
}

export default Parent
