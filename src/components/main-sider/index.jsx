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

import logo from '../../pic/logo512.png'

import './index.css'

const items = [
    {
      key: '/home',
      icon: <PieChartOutlined />,
      label: 'Home Page',
    },
    {
      key: 'sub1',
      label: 'Merchandise',
      icon: <MailOutlined />,
      children: [
        {
          key: '/category',
          icon: <MailOutlined />,
          label: 'Categories',
        },
        {
          key: '/merchandise',
          icon: <MailOutlined />,
          label: 'Merchandise',
        },
      ],
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            {
              key: '11',
              label: 'Option 11',
            },
            {
              key: '12',
              label: 'Option 12',
            },
          ],
        },
      ],
    },
  ];

export default function MainSider() {
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
        items={items}
        onClick={handleClick}
      />
      {/* <Link to={} /> */}
    </div>
        
    </div>
  )
}
