import React from 'react'

import './merchandise.css'
import { Route, Routes } from 'react-router-dom'
import MerchandiseHome from './home'
import MerchandiseAddUpdate from './add-update'
import MerchandiseDetail from './detail'
export default function Merchandise() {
  return (
    <Routes>
        <Route  path='/' element={<MerchandiseHome/> }  />
        <Route  path='/addupdate' element={<MerchandiseAddUpdate/>} />
        <Route path='/detail' element={<MerchandiseDetail/>} />
        <Route path='*' element={<MerchandiseDetail/>} />
    </Routes>
  )
}
