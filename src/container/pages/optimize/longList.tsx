import React, { Component, useState, useEffect } from 'react'

import { Table, Divider, Tag, Button } from 'antd'

import http from '../../../common/js/http'

function LongList() {
    const [list, setList] = useState([])

    const [pages, setPages] = useState({
        page: 1,
        pageSize: 10,
        total: 0,
    })

    useEffect(() => {
        const {page, pageSize} = pages

        http.get('api/list', {page}).then(({ list, total }) => {
            // console.log('list', list)
            setList(list)
            setPages(Object.assign({}, pages, {total}))
        })
    }, [pages.page])

    const onPageChange = (page: number, pageSize?: number) => {
        setPages(Object.assign({}, pages, {page}))
    }

    const pageProps = {
        onChange: onPageChange,
        total: pages.total,
        current: pages.page,
    }

    return (
        <div className='long-list'>
            <h2>list page.</h2>
            <Table dataSource={list} rowKey={'id'} pagination={pageProps}>
                <Table.Column dataIndex={'id'} />
                <Table.Column dataIndex={'name'} />
                <Table.Column dataIndex={'age'} />
                <Table.Column dataIndex={'text'} />
            </Table>
        </div>
    )
}

export default LongList