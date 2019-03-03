import React, { useState, useEffect, useContext, SFC, MouseEvent  } from 'react'

import { Button } from 'antd'

// 定义 state
const initialState = {theme: 'dark'}
type IState = Readonly<typeof initialState>

class ClassComponent extends React.Component<object, IState> {
    readonly state: IState = initialState

    private handleToggleTheme = () => this.setState(toggleTheme)

    render() {
        return (
            <div>
                <Button onClick={this.handleToggleTheme}>change theme</Button>
                <span style={{ marginLeft: '20px' }}>theme: {this.state.theme}</span>
            </div>
        )
    }
}

const toggleTheme = ({theme}:IState) => ({ theme: theme === 'dark' ? 'light' : 'dark' })

export default ClassComponent
