import React, { useState, useEffect, useContext, SFC, MouseEvent  } from 'react'

import '../../pageLib/tsSyntax'

// 定义 state
const initialState = {theme: 'dark'}
type IState = Readonly<typeof initialState>

class SyntaxComponent extends React.Component<object, IState> {
    readonly state: IState = initialState

    private handleToggleTheme = () => this.setState(toggleTheme)

    render() {
        return (
            <div>
                <h2>ts 语法测试</h2>
            </div>
        )
    }
}

const toggleTheme = ({theme}:IState) => ({ theme: theme === 'dark' ? 'light' : 'dark' })

export default SyntaxComponent
