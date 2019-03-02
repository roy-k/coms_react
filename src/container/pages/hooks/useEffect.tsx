import React, { useState, useEffect } from 'react'

import eventProxy from 'react-eventproxy'

import { Button } from 'antd'

function handleClick() {
    console.log('on Click');
}

export default () => {
    const [count, setCount] = useState(0)

    // 可以把 useEffect 理解为 componentDidMount, componentDidUpdate, componentWillUnmount 的整合.
    // 每次 render 后调用
    // 并不会阻塞页面

    // 按类型分为两种:

    // 1. 不需要清理的 eg: 网络请求, dom操作, 日志等
    useEffect(() => {
        // 等同于 componentDidMount + componentDidUpdate 都执行一遍
        console.log('count: ', count);
    })

    // 2.需要清理的 事件订阅等
    useEffect(() => {
        console.log('bind event "btnClick"');
        eventProxy.on('btnClick', handleClick)
        // 会在组件卸载时调用, 进行清理
        return () => {
            console.log('clear event "btnClick"');
            eventProxy.off('btnClick')
        }
    },[])
    // useEffect 第二个参数用于控制执行时机, 参数类型为数组
    // 不传时在每次 render 都会执行一遍, 处理事件订阅不合适
    // 如果传入值, 则根据其更新来执行
    // 如果传空数组([]), 只会在 `挂载` 和 `卸载` 时执行

    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        setCount(count + 1)
                    }}
                >
                    add
                </Button>
                <span style={{ marginLeft: '20px' }}>{count}</span>
            </div>
            <div>
                <Button
                    onClick={() => {
                        eventProxy.trigger('btnClick')
                    }}
                >
                    eventProxy trigger
                </Button>
            </div>
        </div>
    )
}
