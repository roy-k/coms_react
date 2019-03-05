import React, {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const genAsyncComponent = (WrapComponent: any) => () => (
    <Suspense  fallback={<div>Loading...</div>}>
        <WrapComponent />
    </Suspense>
)


const UseState = lazy(() => import('../pages/hooks/useState'));
const UseEffect = lazy(() => import('../pages/hooks/useEffect'));
const UseContext = lazy(() => import('../pages/hooks/useContext'));

const LongList = lazy(() => import('../pages/optimize/longList'));

const SyntaxComponent = lazy(() => import('../pages/typeScript/syntax'));
const ClassComponent = lazy(() => import('../pages/typeScript/classComponent'));

const AsyncUseState = genAsyncComponent(UseState)
const AsyncUseEffect = genAsyncComponent(UseEffect)
const AsyncUseContext = genAsyncComponent(UseContext)

const AsyncLongList = genAsyncComponent(LongList)

const AsyncSyntaxComponent = genAsyncComponent(SyntaxComponent)
const AsyncClassComponent = genAsyncComponent(ClassComponent)


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
                <Route path='/reactFeatures/hooks/useState' component={AsyncUseState}/>
                <Route path='/reactFeatures/hooks/useEffect' component={AsyncUseEffect}/>
                <Route path='/reactFeatures/hooks/useContext' component={AsyncUseContext}/>

                <Route path='/ts/syntax' component={AsyncSyntaxComponent}/>
                <Route path='/ts/classComponent' component={AsyncClassComponent}/>

                <Route path='/reactFeatures/optimize/longList' component={AsyncLongList}/>
            </Switch>
        </Content>
    )
}
