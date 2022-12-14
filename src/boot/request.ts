import { boot } from 'quasar/wrappers'
import request, { extend, ResponseError } from 'umi-request'
import { Notify } from 'quasar'

const defaultErrorMessage: {[key: number]: string} = {
  504: '网关超时',
  503: '服务不可用，服务器暂时过载或维护',
  502: '网关错误',
  500: '服务器内部错误',
  401: '授权异常',
  403: '鉴权异常',
  404: '资源未找到',
  400: '请求参数不合法'
}

/**
 * 错误处理
 * @param error 错误信息
 */
const errorHandler = (error: ResponseError) => {
  if (error.response) {
    const message = (defaultErrorMessage[error.response.status] || '未知错误') + ` ${error.data.description}`
    Notify.create({
      icon: 'warning',
      message
    })
    throw new Error(`${error.response.status} ${message}`)
  }
  Notify.create({
    type: 'negative',
    message: error.message
  })
  throw new Error(`500 ${error.message}`)
}

const api = extend({
  prefix: '/api',
  timeout: 3000,
  errorHandler
})

export default boot(({ app }) => {
  app.config.globalProperties.$request = request
  app.config.globalProperties.$api = api
})

export { api }
