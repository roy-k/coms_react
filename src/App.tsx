import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './common/css/app.styl'

import './common/font/iconfont'

import Layout from './container/layout/layout'

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Router>
                    <Layout />
                </Router>
            </div>
        )
    }
}

export default App
