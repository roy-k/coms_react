// 使用 Mock
import Mock, { Random } from 'mockjs'

import qs from 'query-string'

Mock.mock(RegExp('api/list' + '.*'), 'get', (params: any) => {
    // console.log(params);

    const paramsString = params.url.split('?')[1]

    const { page: current } = qs.parse(paramsString)

    const total = 46

    const listLength: number = total > 10 * Number(current) ? 10 : 10 + (total - 10 * Number(current))

    // console.log(total, current, listLength)

    return {
        total,
        current,
        list: new Array(listLength).fill(current).map((v, i) => {
            return Mock.mock({
                id: Number(current) * 10 - 10 + i + 1,
                name: '@cname',
                'age|12-28': 1,
                'status|0-2': 1,
                text: '@ctitle',
            })
        }),
    }
})

