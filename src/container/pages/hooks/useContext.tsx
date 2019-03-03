import React, { useState, useEffect, useContext } from 'react'

import { Button } from 'antd'

const ThemeContext = React.createContext('dark')

interface EventHandle {
    (): void
}
interface UserProps {
    onClick: EventHandle
}

const ContextUser = ({ onClick }: UserProps) => {

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

interface ContainerState {
    theme: string
}

class UseContextContainer extends React.Component {
    readonly state: ContainerState = {
        theme: 'dark',
    }

    toggleTheme = () => {
        this.setState(({ theme }:ContainerState) => ({ theme: theme === 'dark' ? 'light' : 'dark' }))
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
