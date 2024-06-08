// import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import React, { useState } from 'react';
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

import './index.css'



 function MainSider() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };

    const handleClick = (e)=> {
        navigate(e.key,{replace:true})

    }
  return (

    <div  className='left-nav'>
        <Link to='/' className='left-nav-header'>
            <img className='logo' src={logo} alt="" />
            <h1>React BMS</h1>
        </Link>

        <div>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}00
      </Button>
      <Menu
        defaultSelectedKeys={['5']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={menuItem}
        onClick={handleClick}
      />
      {/* <Link to={} /> */}
    </div>
        
    </div>
  )
}

export default MainSider;
