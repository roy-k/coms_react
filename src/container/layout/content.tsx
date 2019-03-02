import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// import { NavItem } from './config'

import LongList from '../pages/longList'

import { Layout} from 'antd'

const { Content } = Layout

export default () => {
    return (
        <Content
            style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
            <Switch>
                <Route path='/reactFeatures/longlist' component={LongList}/>
            </Switch>
        </Content>
    )
}
