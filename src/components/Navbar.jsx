import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
export const Navbar = () => {
  return (
    <>
<div className='Navbar'>
<div className='leftnav'>
    <img src="../assets/gericht.png" alt="" />
</div>
<div>
    <ul>
     <Link to="/"> <li>Home</li>    </Link>  
<Link to="/menu"><li>Menu</li></Link> 
      <Link to="/about"><li>About</li></Link>  
        
        <li>Awards</li>
    </ul>
</div>
<div className='rightnav'>
<p>LoginIn/Register</p>
</div>
</div>
    </>
  )}
