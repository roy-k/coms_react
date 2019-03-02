import React from 'react'
import { Link } from 'react-router-dom'

import { NavItem } from './config'
import { Menu, } from 'antd'
const { SubMenu } = Menu

interface SideMenuConfigProps {
    nav: Array<NavItem>
}

export default ({ nav }: SideMenuConfigProps) => {
    return (
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
    )
}
