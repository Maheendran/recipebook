import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import{BsSearch}from'react-icons/bs'
import styled from 'styled-components';

export const Searching = () => {
    const Navigate=useNavigate()
    const[data,setData]=useState("")
    const handleclick=(e)=>{
    e.preventDefault();
    if(data.length>0){
      Navigate("/cusines/"+data)}}
  return (
    <div>

        <formstyle  >
<Input>
        <input type="text" placeholder='search' onChange={(e)=>setData(e.target.value)}
         value={data}/>
     <BsSearch onClick={handleclick} style={{color:"white"}}></BsSearch>
     </Input>
        </formstyle>
      
    </div>
  )
}
const Input=styled.div`
input{
margin:20px;
padding:4px 10px;
width:400px;
height:30px;
border-radius:5px;
background-color:white;
margin-bottom:20px;
border:0.25px solid black;


}

`