import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import { Flex, Layout } from 'antd';
import memoryData from '../../utils/memoryData';
import MainHeader from '../../components/main-header';
import MainSider from '../../components/main-sider';
import Home from '../home/home';
import Category from '../category/category';
import Merchandise from '../merchandise/merchandise';
import Charts from '../charts/charts';

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: '80px',
  paddingInline: 48,
  lineHeight: '120px',
  backgroundColor: '#4096ff',
//   width: '100%',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '100%',
  height: '100%',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: '10%',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
//   width: 'calc(50% - 8px)',
  width: '100%',
//   maxWidth: 'calc(100% - 8px)',
  height: '100%',
};
const Admin = () => {
    const user = memoryData.user
    console.log(user)
    if (!user || !user._id){
      return <Navigate to='/login' replace='true' />
    }
    return(

  <Layout style={layoutStyle}>
      <Sider width="15%" style={siderStyle}>
        <MainSider />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
            <MainHeader />
        </Header>
        <Content style={contentStyle}>
        {/* <BrowserRouter> */}
            <Routes>
               
                {/* <Route path='/category' element={<Category />} /> */}
                <Route path='/category' Component={Category} />
                <Route path='/merchandise' element={<Merchandise />} />
                <Route path='/charts' element={<Charts />} />
                <Route path='/home' element={Home} />
            </Routes>
       {/* </BrowserRouter> */}
     
        </Content>

        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>

)};
export default Admin;