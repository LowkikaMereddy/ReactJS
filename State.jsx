import React from 'react'
import { useState } from 'react'
const State = () => {
let [name , setName] = useState("abhi")
console.log(name);
console.log(setName);

let demo = () => {
    setName("ammu")
}
  return (
    <div>
         <h1>{name}</h1>
         <button onClick={demo}>click</button>
    </div>
  )
}

export default State