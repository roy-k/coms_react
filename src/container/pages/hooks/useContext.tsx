import React, { useState, useEffect, useContext, SFC, MouseEvent  } from 'react'

import { Button } from 'antd'

const ThemeContext = React.createContext('dark')

interface IProps {
  onClick (event: MouseEvent<HTMLElement>): void,
}

const ContextUser: SFC<IProps> = ({ onClick }) => {

    // useContext 传入 context, 即可直接使用其 value
    const context:string = useContext(ThemeContext)

    return (
        <div>
            <div>
                <Button onClick={onClick}>change theme</Button>
                <span style={{ marginLeft: '20px' }}>context: {context}</span>
                {/* 对比之前用法 */}
                {/* <ThemeContext.Consumer>
                    {theme => <span style={{ marginLeft: '20px' }}>{theme}</span>}
                </ThemeContext.Consumer> */}
            </div>
        </div>
    )
}

const initialState = {theme: 'dark'}

type IState = Readonly<typeof initialState>

class UseContextContainer extends React.Component<object, IState> {
    readonly state: IState = initialState

    toggleTheme = () => {
        this.setState(({ theme }) => ({ theme: theme === 'dark' ? 'light' : 'dark' }))
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <ContextUser onClick={this.toggleTheme} />
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default UseContextContainer
