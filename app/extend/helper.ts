// app/extend/helper.js
module.exports = {
  /** 成功响应 */
  renderSuccess<T>(data: T) {
    return {
      code: 200,
      message: "请求成功!",
      data,
    };
  },
  /** 失败响应 */
  renderError(code: number, message: string) {
    return {
      code,
      message,
      data: {},
    };
  },
};
