import React, { Fragment, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { menuItems } from '../routes/route';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Header, Sider, Content, Footer } = Layout;

const PageLayout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onCollapse = (collapsed: any) => {
    console.log('onCollapse', collapsed);
    // this.props.dispatch({
    //   type: 'global/changeLayoutCollapsed',
    //   payload: collapsed,
    // });
  }

  const HeadIcon = styled.div`
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  `

  return (
    <Fragment>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
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
          <Header style={{ padding: 0, background: colorBgContainer }}>
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

