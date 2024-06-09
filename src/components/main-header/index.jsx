import React from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from 'antd';

import './index.css'

export default function MainHeader() {
  const location = useLocation();
  console.log(location)  
  return (
    <div className='header'>
        <div className="header-top">
            <span>Welcome, {location.state.name}</span>
            <Button className='logout' type='primary' onClick={console.log('log out')}>Logout</Button>
        </div>
        <div className='header-bottom'>
            <div className='header-bottom-left'>HomePage</div>
            <div className='header-bottom-right'>
                <span>2024-6-9 01:26 am</span>
            </div>
        </div>
    </div>
  )
}
