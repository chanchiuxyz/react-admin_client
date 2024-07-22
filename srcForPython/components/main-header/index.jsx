import React, { useState,useEffect }  from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { Button, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import memoryData from '../../utils/memoryData';
import { formateDate } from '../../utils/dateUtils';
import menuItems from '../../config/menuConfig'
// redux
import { useSelector } from 'react-redux';
import { selectTitle } from '../../redux/reducers/title';


import './index.css'



export default function MainHeader() {
  const location = useLocation();
  // console.log(location)  
  const navigate = useNavigate()
  // const [modal, contextHolder] = Modal.useModal();
  // get state from redux , dispatch code in 'main-sider/index.jsx'
  const title = useSelector(selectTitle)

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
// get state from redux , don't need the code here
  //  const getTitle = ()=> {

  //     let path = location.pathname
  //     console.log(path)
  //     const index = path.indexOf('/',1)
  //     if ( index >0 ) path = path.slice(0,index)
  //     console.log(path)
  //     if (path === '/') {
  //       return 'Homepage'
  //     }
  //     let title = ''
  //     menuItems.forEach(item => {
  //       if (item.key === path){
  //         title = item.label
  //       } 
  //       else if (item.children){
  //        const cItem = item.children.find(cItem =>
  //         cItem.key === path
  //        )
  //        if (cItem) {
  //           title = cItem.label
  //        }
  //       }
  //     })
      // if (title = ''){
      //   let title = path.slice(1)

      // } 
      // return title
  // }
// get state from redux , don't need the code here
  // const showTitle = getTitle()
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
            {/* <div className='header-bottom-left'>{showTitle}</div> */}
            {/* get state from redux */}
            <div className='header-bottom-left'>{title}</div>
            <div className='header-bottom-right'>
                <span>{time}</span>
            </div>
        </div>
    </div>
  )
}
