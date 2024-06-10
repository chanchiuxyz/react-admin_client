import React, { useState,useEffect }  from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { Button, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import memoryData from '../../utils/memoryData';
import { formateDate } from '../../utils/dateUtils';
import menuItems from '../../config/menuConfig'


import './index.css'



export default function MainHeader() {
  const location = useLocation();
  // console.log(location)  
  const navigate = useNavigate()
  // const [modal, contextHolder] = Modal.useModal();

  const logout = () => {


        Modal.confirm({
        title: 'Logout Confirm?',
        icon: <ExclamationCircleOutlined />,
        okText: 'Yes',
        cancelText: 'No',
        onOk() {
          // console.log('OK')
          localStorage.removeItem('user')
          memoryData.user = null
          navigate('/login')
        },
        onCancel() {
          console.log('Cancel');
        },
      })


  
  }

   const getTitle = ()=> {

      const path = location.pathname
      if (path === '/') {
        return 'Homepage'
      }
      let title = ''
      menuItems.forEach(item => {
        if (item.key === path){
          title = item.label
        } 
        else if (item.children){
         const cItem = item.children.find(cItem =>
          cItem.key === path
         )
         if (cItem) {
            title = cItem.label
         }
        }
      })
      return title
  }

  const showTitle = getTitle()
  // console.log(showTitle)

  const username = memoryData.user.username
 
  const[time,setTime] = useState()

  useEffect(() => {

    const intervel = setInterval(
    ()=>{
      const now = new Date()
      const showTime = formateDate(now)
      setTime(showTime)
      // console.log('timer')
    } ,1000 )
    return () => clearInterval(intervel)
  },[]
)
  return (
    <div className='header'>
        <div className="header-top">
            <span>Welcome, {username}</span>
            <Button className='logout' type='primary' onClick={logout}>Logout</Button>
        </div>
        <div className='header-bottom'>
            <div className='header-bottom-left'>{showTitle}</div>
            <div className='header-bottom-right'>
                <span>{time}</span>
            </div>
        </div>
    </div>
  )
}
