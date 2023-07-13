import { Service } from "egg";
import { IGeoData, IWeatherData } from "../types/weather";

/** 真实项目中，key应该放在环境变量活动私有文件中，一般不上传到git仓库 */
const appid = "6e0a1a871f03484c97c4f94e3d638df7" || process.env.WEATHER_KEY;

export default class NewsService extends Service {
  /** 根据城市名称获取经纬度 */
  public async getWeatherBuyCity(city: string) {
    const { ctx } = this;
    const res = await ctx.curl<IGeoData[]>(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${appid}`, { dataType: "json" });
    if (res.status === 200) {
      const { lon, lat } = res.data[0];
      return this.getWeatherByGeo(lon, lat);
    } else {
      return ctx.helper.renderError(res.status, "获取天气信息失败!");
    }
  }

  /** 根据经纬度获取天气详情 */
  private async getWeatherByGeo(lon: number, lat: number) {
    const { ctx } = this;
    const res = await ctx.curl<IWeatherData>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`, { dataType: "json" });
    if (res.status === 200) {
      return ctx.helper.renderSuccess(res.data);
    } else {
      return ctx.helper.renderError(res.status, "获取天气信息失败!");
    }
  }
}
