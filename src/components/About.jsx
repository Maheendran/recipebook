import React from 'react'
import { Navbar } from './Navbar'

export const About = () => {
  return (
   
    <div>
         <Navbar/>
 <div className='two_container'>
        <div className='left_two_container'>
        <h1>About Us</h1>
        <p>
Welcome to Digital Recipe Book. Whether you’re a new cook <br /> just starting out or a seasoned one looking <br /> for a new recipe outside of your  staples, at Digital Recipe Book</p>
          <button>Know more</button>
        </div>
        <div className='mid_two_container'>
        <img src="../assets/G.png" alt="" />
          <img src="../assets/knife.png" alt="" />
         
        </div>
        <div className='right_two_container'>
        <h1>Our History</h1>
        <p>
Welcome to Digital Recipe Book. Whether you’re a new cook <br /> just starting out or a seasoned one looking <br /> for a new recipe outside of your  staples, at Digital Recipe Book</p>
          <button>Know more</button>
        </div>
      </div>


    </div>
  )
}
