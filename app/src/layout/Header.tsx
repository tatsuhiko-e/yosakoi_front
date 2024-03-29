import React, { Fragment, useContext, useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { menuItems } from '../routes/route';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../App';
import LogoutIcon from '@mui/icons-material/Logout';


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
  const User = useContext(AuthContext);
  return (
    <Fragment>
      <Layout style={{margin: 0}}>
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
              <UserName>{User.currentUser?.teamName}</UserName>
              <LogoutIcon></LogoutIcon>
            </div>
          </Header>
          <Content style={{ padding: "26px 16px", height: "100vh", overflow: "scroll" }}>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Yosakoi Music ©︎2022</Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default PageLayout

