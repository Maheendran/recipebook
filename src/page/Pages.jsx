import React from 'react'

import { Home } from './Home'
import {Route,Routes} from "react-router-dom"
import Cusines from './Cusines'
import  Search  from './Search'
import { About } from '../components/About'
import { Menu } from '../components/Menu'

export const Pages = () => {
  return (
  
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/menu" element={<Menu/>}/>
<Route path='/cusines/:type' element={<Cusines/>}/>
<Route path='/search/:type_name' element={<Search/>}/>

      </Routes>
  
  )
}
