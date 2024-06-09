import React from 'react';
import { Navigate,useNavigate, Route, Routes,useLocation } from 'react-router-dom'
import { Flex, Layout } from 'antd';
import memoryData from '../../utils/memoryData';
import MainHeader from '../../components/main-header';
import MainSider from '../../components/main-sider';
import Home from '../home/home';
import Category from '../category/category';
import Merchandise from '../merchandise/merchandise';
import Column from '../charts/column';
import Line from '../charts/line';
import Pie from '../charts/pie';

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: '80px',
  paddingInline: 0,
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
    const location = useLocation()
    // console.log(location)
    if (!user || !user._id){
    //  const navigate = useNavigate()
    //   navigate('/login','true')
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
               
               
                {/* <Route path='/' Component={Home} />
                <Route path='/category' Component={Category} />
                <Route path='/merchandise' Component={Merchandise } />
                <Route path='/charts' Component={Column} />
                <Route path='/column' Component={Column} />
                <Route path='/line' Component={Line} />
                <Route path='/pie' Component={Pie} /> */}

                <Route path='/' element={<Home />} />
                <Route path='/category' element={<Category />} />
                <Route path='/merchandise' element={<Merchandise />} />
                <Route path='/charts' element={<Column />} />
                <Route path='/column' element={<Column />} />
                <Route path='/line' element={<Line />} />
                <Route path='/pie' element={<Pie />} />

                
            </Routes>
       {/* </BrowserRouter> */}
     
        </Content>

        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>

)};
export default Admin;