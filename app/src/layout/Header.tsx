import React, { Fragment, useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { menuItems } from '../routes/route';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Header, Sider, Content, Footer } = Layout;

const HeadIcon = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`

const UserName = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin-right: 30px;
`


const PageLayout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Fragment>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <HeadIcon />
          <Menu
            theme="dark"
            mode="inline"
            style={{ margin: '16px 0', width: '100%' }}
          >
            {
              menuItems.map((item) => {
                return (
                  <Menu.Item key={item.key}>
                    <Link to={item.path}>{item.label}</Link>
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="header" style={{ display: "flex", justifyContent: "end" }}>
            <div style={{ display: "flex" }}>
              <UserName>江口正樹</UserName>
            </div>
          </Header>
          <Content style={{ margin: '24px 16px 0', height: "100vh" }}>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Yosakoi Music ©︎2022</Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default PageLayout

