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
                title: 'hooks',
                icon: 'user',
                sideSubMenu: [
                    {
                        title: 'useState',
                        path: '/reactFeatures/hooks/useState',
                    },
                    {
                        title: 'useEffect',
                        path: '/reactFeatures/hooks/useEffect',
                    },
                    {
                        title: 'useContext',
                        path: '/reactFeatures/hooks/useContext',
                    },
                ],
            },
            {
                title: '优化类',
                icon: 'user',
                sideSubMenu: [
                    {
                        title: '长列表',
                        path: '/reactFeatures/optimize/longList',
                    },
                ],
            },
        ],
    },
    {
        title: 'type script',
        path: '/ts',
        sideMenu: [
            {
                title: '相关语法',
                icon: 'user',
                sideSubMenu: [
                    {
                        title: 'ts 语法',
                        path: '/ts/syntax',
                    },
                    {
                        title: '类组件',
                        path: '/ts/classComponent',
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
