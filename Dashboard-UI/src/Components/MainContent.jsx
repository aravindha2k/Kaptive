import React from 'react'
import data from '../data.json'

const MainContent = () => {
    // console.log(data);
    const {Sheet1} = data;
    // console.log(Sheet1);
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

export default MainContent