import { strict as assert } from 'assert'
import { app } from 'egg-mock/bootstrap'

describe('test/app/controller/weather.test.ts', () => {
  it('should GET /weather/getWeatherBuyCity', async () => {
    const result = await app.httpRequest().get('/weather/getWeatherBuyCity?city=%E6%88%90%E9%83%BD').expect(200)
    assert(result.body.code === 200)
  })
})
