/** 成功响应 */
export function renderSuccess<T>(data: T) {
  return {
    code: 200,
    message: '请求成功!',
    data,
  }
}

/** 失败响应 */
export function renderError(code: number, message: string) {
  return {
    code,
    message,
    data: {},
  }
}
