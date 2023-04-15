import React from 'react'
import {useSelector} from 'react-redux'
const Output = () => {
  const Data=  useSelector((result)=>{
       return result;
    });
  return (
    <div>
     <h1> {Data.InputName.name}</h1>
    </div>
  )
}

export default Output
