import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { NavItem, SideMenuItem } from './config'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { SubMenu } = Menu

interface SideMenuListProps {
    sideMenu: Array<SideMenuItem>
}

interface SideMenuConfigProps {
    nav: Array<NavItem>
}

const SideMenuList = ({ sideMenu }: SideMenuListProps) => (
    <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={sideMenu.map(v => v.title)}
        inlineCollapsed={false}
        style={{ height: '100%', borderRight: 0 }}
    >
        {sideMenu.map(menu => (
            <SubMenu
                key={menu.title}
                title={
                    <span>
                        <Icon type='user' />
                        {menu.title}
                    </span>
                }
            >
                {menu.sideSubMenu
                    ? menu.sideSubMenu.map(subMenu => (
                          <Menu.Item key={subMenu.path}>
                              <Link to={subMenu.path}>{subMenu.title}</Link>
                          </Menu.Item>
                      ))
                    : null}
            </SubMenu>
        ))}
    </Menu>
)

export default ({ nav }: SideMenuConfigProps) => {
    return (
        <Switch>
            {nav.map(v => (
                <Route key={v.path} path={v.path} render={() => <SideMenuList sideMenu={v.sideMenu} />} />
            ))}
        </Switch>
    )
}
