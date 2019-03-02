import React, { Component } from 'react'

import { Table, Divider, Tag, Button } from 'antd'

interface ListItem {
    text: string
    size: number
    key: number
}

interface State {
    list: Array<ListItem>
    showPagination: any
}

class LongList extends Component<object, State> {

    readonly state: State = {
        list: this.generateListData(),
        showPagination: true,
    }

    generateListData() {
        return Array(100)
            .fill(1)
            .map(() => {
                const randomNum = Math.ceil(Math.random() * 10 ** 8)

                return {
                    text: randomNum.toString(36).substr(2),
                    size: randomNum,
                    key: randomNum,
                }
            })
    }

    // 公有类字段(public class fields)特性。
    // 公有类字段特性可以让你在你们的类中使用箭头函数语法。
    togglePageView = () => {
        this.setState(preState => ({showPagination: !preState.showPagination}))
    }

    render() {
        const { list, showPagination } = this.state

        const columns = [
            {
                title: 'Text',
                dataIndex: 'text',
                key: 'text',
                width: 180,
                render: (text: string) => <span>{text}</span>,
            },
            {
                title: 'Size',
                dataIndex: 'size',
                key: 'size',
                // width: 180,
                render: (size: number) => <span>{size}</span>,
            },
        ]

        return (
            <div className='long-list'>
                <h2>this is a long list.</h2>
                <Button onClick={this.togglePageView}>{showPagination ? '关闭分页' : '分页展示'}</Button>
                <Table columns={columns} dataSource={list} pagination={showPagination}/>
            </div>
        )
    }
}

export default LongList
