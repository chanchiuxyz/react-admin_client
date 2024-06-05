import React from 'react';
import { Flex, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: '10%',
  paddingInline: 48,
  lineHeight: '640px',
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
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(100% - 8px)',
};
const Admin = () => (
  <Flex gap="middle" wrap>  
  <Layout style={layoutStyle}>
      <Sider width="8%" style={siderStyle}>
        Sider
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  </Flex>
);
export default Admin;