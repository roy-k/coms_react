import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { navOptions } from './config'

import SideMenu from './sideMenu'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

export default () => {
    const [nav] = useState(navOptions)

    return (
        <Layout>
            <Header className='header'>
                <div className='logo' />
                <Menu
                    theme='dark'
                    mode='horizontal'
                    // defaultSelectedKeys={["2"]}
                    style={{ lineHeight: '64px' }}
                >
                    {nav.map(v => (
                        <Menu.Item key={v.path}>
                            <Link to={v.path}>{v.title}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <SideMenu nav={nav} />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
