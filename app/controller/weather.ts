import { Controller } from 'egg'
import { renderError } from '../utils/tools'

export default class HomeController extends Controller {
  /** 获取城市天气信息 */
  public async index() {
    const { ctx, service } = this
    const { city } = ctx.query
    if (!city) {
      ctx.body = renderError(400, '城市名称不能为空!')
      return
    }
    try {
      const res = await service.weather.getWeatherBuyCity(city)
      ctx.body = res
    } catch (error: any) {
      ctx.body = renderError(500, error.message)
    }
  }
}
