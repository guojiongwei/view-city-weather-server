import { Controller } from "egg";

export default class HomeController extends Controller {
  /** 获取城市天气信息 */
  public async index() {
    const { ctx, service } = this;
    const { city } = ctx.query;
    try {
      const res = await service.weather.getWeatherBuyCity(city);
      ctx.body = res;
    } catch (error: any) {
      ctx.body = ctx.helper.renderError(500, error.message);
    }
  }
}
