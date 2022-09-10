import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from "styled-components"
import {Splide,SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'
import { Loading } from './Loading'

function Popular(){
  const [data, setData] = useState(false);
const[popular,setPopular]=useState([])
    const getpopular=()=>{
      setData(true)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chocolate`)
        .then(res=>res.json())
        .then((res)=>{
          setPopular( res.meals)
          setData(false)
         
        })
       
    }
    
    useEffect(()=>{
        getpopular()
    },[])
  return (
    <div>
  
  {data ? <Loading/> :  <div>
     <Wrapper>
        <h3 style={{textAlign:"center",fontSize:"30px",paddingTop:"3rem",color:"gold",padding:"1rem"}}>popular food</h3>
    
  <Splide options={{perPage:6,
   pagination:false,drag:'free',
  gap:"1rem"}}>
      
 {popular.map((e)=>{

          return(
            <SplideSlide key={e.idMeal}>

               <Card >
              <Link to={`/search/${e.strMeal}`}>

             <img src={e.strMealThumb} alt="" />
             <h3>{e.strMeal}</h3>
             </Link>
             </Card>

            </SplideSlide>
          )
        })}
          </Splide>
      </Wrapper>
  </div> }
     
    

  </div>

  )
  
}
const Wrapper= styled.div`
  
  
  `

const Card=styled.div`
padding-top:4rem;
font-Weight:600;
min-heigth:26rem;
overflow:hidden;
text-align:center;
h3{
 
  text-decoration:none;
  color:white;
  text_align:center;
};

img{
 
width:12rem;
height:15rem;
}
`

export default Popular