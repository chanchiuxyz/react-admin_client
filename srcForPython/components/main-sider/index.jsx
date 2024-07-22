// import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import React, { useState, useEffect } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
// menu config
import menuItem from '../../config/menuConfig'

import logo from '../../pic/logo512.png'
// redux
import { useDispatch } from 'react-redux';
import { setTitle } from '../../redux/reducers/title';

import './index.css'

 function MainSider() {
    const [collapsed, setCollapsed] = useState(false);
    const [menuNodes, setMenuNodes] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        const menuNodes = getMenuNodes(menuItem)
        setMenuNodes(menuNodes)
    },[])
//  check role authorites

    const getMenuNodes = (menuItem) => {
        console.log('=====',menuItem)
        return menuItem.reduce((pre,item) => {
            if (hasAuth(item)) {
              // withou children
                if(!item.children) {
                    pre.push(item)  
                } else {
                    let newItem = {...item}
                    newItem.children = []
                    item.children.map((cItem) => {
                         if (hasAuth(cItem)) {
                          newItem.children.push(cItem)
                          }                         
                    })
                    pre.push(newItem)
                }
                console.log(pre)

            }
            return pre
        },[]) 

    }
    // check if user have right of item
    const hasAuth = (item) => {
        const {key, isPublic} = item
        const user = JSON.parse(localStorage.getItem('user') || '{}')
        const { username, role } = user
        console.log('-----',username,role)
        if (username === 'admin' || isPublic || role.menus.indexOf(key) !== -1) {
            return true
        } else if (item.children) { // check children
            return !!item.children.find(child => role.menus.indexOf(child.key) !== -1)
        }
        return false
    }
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    // get label of MenuItem by key 
    const getMenulabelByKey = (key) => {
      let title = ''
      menuNodes.forEach(item => {
              if (item.key === key){
                title = item.label
              } 
              else if (item.children){
               const cItem = item.children.find(cItem =>
                cItem.key === key
               )
               if (cItem) {
                  title = cItem.label
               }
              }
            })
      return title
    }
    const handleClick = (e)=> {
      // console.log(e.item) 
      const title = getMenulabelByKey(e.key)
      dispatch(setTitle(title)) 
      navigate(e.key)


    }
  return (

    <div  className='left-nav'>
        <Link to='/' className='left-nav-header'>
            <img className='logo' src={logo} alt="" />
            <h1>React BMS</h1>
        </Link>

        <div>
      {/* <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}00
      </Button> */}
      <Menu
        defaultSelectedKeys={['/home']}
        defaultOpenKeys={['Merchandise']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={menuNodes}
        onClick={handleClick}
      />
      {/* <Link to={} /> */}
    </div>
        
    </div>
  )
}

export default MainSider;
