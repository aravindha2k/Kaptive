import React from 'react'
import data from "../data.json"

const Tables = () => {
    // console.log(data);
    const{Sheet1} = data
  return (
    <>
    <div>MainContent</div>
    <ul>
        {Sheet1.map((data, index)=>{
            return <li key={index}>{data.Overhead}</li>
        })}
    </ul>
    </>
  )
}

export default Tables