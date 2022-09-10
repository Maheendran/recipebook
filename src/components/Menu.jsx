import React from 'react'
import {Searching} from '../page/Searching'
import { Navbar } from './Navbar'
import {Categoery} from '../components/Categoery'
import Popular from './Popular'
import Veggie from './Veggie'
import '../style/Menu.css'
export const Menu = () => {
  return (
    <div>
        <Navbar/>
       <Searching/>
       <Categoery/>
       <Popular/>
<Veggie/>
    </div>
  )
}
