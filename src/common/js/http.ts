import axios from 'axios'

interface Params {
    [propName: string]: any
}

class Http {
    constructor() {}

    // todo method enums ;  默认值的写法
    private async request(path: string, method = 'get', params: Params, addition?: Params) {
        try {
            const { status, data } = await axios({
                method,
                url: path,
                params,
            })

            if (status === 200) {
                return data
            } else {
            }
        } catch (error) {
            console.log('数据拉取失败: ', error)
        }
    }

    public get(path: string, params: Params, addition?: Params) {
        return this.request(path, 'get', params, addition)
    }
}

export default new Http()
