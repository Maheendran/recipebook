import React from 'react'
import { Navbar } from '../components/Navbar'
import Popular  from '../components/Popular'
import Veggie  from '../components/Veggie'
import '../style/Home.css'
export const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='oneconatiner'>
<div className='left_oneconatiner'>
  <p><span><img src="../assets/spoon.png" alt="" /></span> Chase new flavour</p>
  <h1>THE KEY TO DINING</h1>
  <p>
Welcome to Digital Recipe Book. Whether you’re a new cook just starting out or a seasoned one looking for a new recipe outside of your staples, at Digital Recipe Book</p>
  <button>EXPLORE NOW</button>
</div>
<div className='right_onecontainer'>
  <img src="../assets/welcome.png" alt="" />
</div>
      </div>

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
        24/02/2022 · Simply Recipes is a personal website which has taken off and receives millions of views a month. The inspiring thing is it’s made <br /> on WordPress using the method I’ve shown you</p>
          <button>Know more</button>
        </div>
      </div>


<Popular/>
      <div className='three_container'>
        
<div className='left_three_container'>
  <h1>Fast Food</h1>
  <ul>
    <li>Burger</li>
    <li>Pizza</li>
    <li>sanwich</li>
  </ul>
</div>
<div className='mid_three_container'>
<h1>Today Special</h1>
  <img src="../assets/menu.png" alt="" />
</div>
<div className='right_three_container'>
<h1>Cocktail</h1>
  <ul>
    <li>Tom Collins</li>
    <li>Brandy</li>
    <li>Daiquiri</li>
  </ul>
</div>
       
      </div>
      <Veggie/>
    </div>
   
  )
}
