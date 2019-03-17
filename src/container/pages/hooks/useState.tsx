import React, { useState } from 'react'

import { Button } from 'antd'

import MIcon from '../../../component/icon'

export default () => {
    // 第一个参数为属性, useState 传入参数为初始值
    // 第二个参数 setStatus, 与status配对, 用于更新此属性, 无需使用{status}, 只需要传输更新的值
    const [count, setCount] = useState(0)
    // 多次声明多个属性
    const [status, setStatus] = useState(true)

    const initObj = {
        text: 'init',
        changed: false,
    }
    const [objectData, setObjectData] = useState(initObj)

    return (
        <div>
            <div>
                <MIcon icon="icon-wodeye_diqu"/>
                <Button
                    onClick={() => {
                        setCount(count + 1)
                        // setCount(preCount => preCount + 1)
                    }}
                >
                    add
                </Button>
                <span style={{ marginLeft: '20px' }}>{count}</span>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setStatus(!status)
                    }}
                >
                    toggle status
                </Button>
                <span style={{ marginLeft: '20px' }}>{status.toString()}</span>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setObjectData(preData => {
                            const newData = {
                                text: 'new',
                                changed: true,
                            }
                            // 对象数据需要全量更新
                            return {...preData, ...newData}
                        })
                    }}
                >
                    change objectData
                </Button>
                <span style={{ marginLeft: '20px' }}>{objectData.text}</span>
            </div>

        </div>
    )
}
