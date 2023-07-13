import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  /** 首页 */
  router.get('/', controller.home.index)
  /** 根据城市获取天气接口 */
  router.get('/weather/getWeatherBuyCity', controller.weather.index)
}
