export interface NavItem {
    title: string
    path: string
    sideMenu: Array<SideMenuItem>
}

export interface SideMenuItem {
    title: string
    icon: string
    sideSubMenu: Array<SideSubMenu>
}

export interface SideSubMenu {
    title: string
    path: string
}

export const navOptions: Array<NavItem> = [
    {
        title: 'React Features',
        path: '/reactFeatures',
        sideMenu: [
            {
                title: '列表类',
                icon: 'user',
                sideSubMenu: [
                    {
                        title: 'list',
                        path: '/reactFeatures/longlist',
                    },
                ],
            },
        ],
    },
    {
        title: 'Data Visualization',
        path: '/dataVisualization',
        sideMenu: [
            {
                title: '数据可视化',
                icon: 'user',
                sideSubMenu: [
                    {
                        title: '图表',
                        path: '/dataVisualization/list',
                    },
                ],
            },
        ],
    },
]
