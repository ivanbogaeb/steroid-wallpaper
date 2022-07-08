import { _temp } from "../../../temp/temp";
import { _cache } from "../../../cache/cache";
import { _errors } from "../../../errors/errors";

import { settings } from "../../../settings/settings";

import { cityCode } from "./cityCode";
import { errorHandler } from "./errorHandler";
import { helpers } from "../../helpers";

export async function forecast():Promise<any>{
    const metricConverter = (type: string, value: number) => {
        switch(type){
            case "in":
                return (value*25.4).toFixed(2); // Returns mm
            case "mi/h":
                return (value*1.609344).toFixed(2); // Returns km/h
            case "F":
                return ((value-32)/1.8).toFixed(2); // Returns C
        };
    };

    if (_temp.user.loggedIn){
        if (settings.weather.active){
            if (settings.weather.current){
                if ((Date.now() - _cache.weather.forecast.lastRequest) > settings.weather.waitingTime.forecast){
                    const city = await cityCode();
                    if (city.success){
                        const res = await fetch(
                            `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${_cache.weather.city.key}?apikey=${_cache.weather.apiKey}&details=true`,
                            {
                                method: "GET",
                                headers: {"Accept-Encoding": "gzip"}
                            },
                        );
                        switch(res.status){
                            case 200:
                                try {
                                    let data = await res.json();

                                    // General
                                    _cache.weather.forecast.headline.severity = data.Headline.Severity;
                                    _cache.weather.forecast.headline.text = data.Headline.Text;
                                    _cache.weather.forecast.headline.type = data.Headline.Category;
                                    _cache.weather.forecast.lastRequest = Date.now();

                                    // Reading each day
                                    data["DailyForecasts"].forEach((day: any, index: number) => {
                                        let newDay:any = {};
                                        if (index === 0){ // Today's weather
                                            newDay = _cache.weather.today;
                                        } else {
                                            newDay = _cache.weather.forecast.days[index-1];
                                        };

                                        // Air information
                                        newDay.air.quality.category = day.AirAndPollen[0].Category; // Quality
                                        newDay.air.quality.type = day.AirAndPollen[0].Type;
                                        newDay.air.quality.value = day.AirAndPollen[0].Value;
                                        newDay.air.grass.category = day.AirAndPollen[1].Category; // Grass
                                        newDay.air.grass.value = day.AirAndPollen[1].Value;
                                        newDay.air.mold.category = day.AirAndPollen[2].Category; // Mold
                                        newDay.air.mold.value = day.AirAndPollen[2].Value;
                                        newDay.air.ragweed.category = day.AirAndPollen[3].Category; // Ragweed
                                        newDay.air.ragweed.value = day.AirAndPollen[3].Value;
                                        newDay.air.tree.category = day.AirAndPollen[4].Category; // Tree
                                        newDay.air.tree.value = day.AirAndPollen[4].Value;
                                        // Moon
                                        newDay.moon.age = day.Moon.Age;
                                        newDay.moon.phase = day.Moon.Phase;
                                        newDay.moon.rise = day.Moon.Rise;
                                        newDay.moon.set = day.Moon.Set;
                                        // Sun
                                        newDay.sun.hours = day.HoursOfSun;
                                        newDay.sun.rise = day.Sun.Rise;
                                        newDay.sun.set = day.Sun.Set;
                                        // Temperature Description
                                        newDay.temperature.text.minimum = day.RealFeelTemperature.Minimum.Phrase;
                                        newDay.temperature.text.maximum = day.RealFeelTemperature.Maximum.Phrase;
                                        // Temperature Feel
                                        newDay.temperature.feel.minimum.imperial.value = day.RealFeelTemperature.Minimum.Value;
                                        newDay.temperature.feel.minimum.metric.value = metricConverter("F", day.RealFeelTemperature.Minimum.Value);
                                        newDay.temperature.feel.maximum.imperial.value = day.RealFeelTemperature.Maximum.Value;
                                        newDay.temperature.feel.maximum.metric.value = metricConverter("F", day.RealFeelTemperature.Maximum.Value);
                                        // Temperature Measure
                                        newDay.temperature.measure.minimum.imperial.value = day.Temperature.Minimum.Value;
                                        newDay.temperature.measure.minimum.metric.value = metricConverter("F", day.Temperature.Minimum.Value);
                                        newDay.temperature.measure.maximum.imperial.value = day.Temperature.Maximum.Value;
                                        newDay.temperature.measure.maximum.metric.value = metricConverter("F", day.Temperature.Maximum.Value);
                                        // Temperature Summary
                                        newDay.temperature.summary.cooling.imperial.value = day.DegreeDaySummary.Cooling.Value;
                                        newDay.temperature.summary.cooling.metric.value = metricConverter("F", day.DegreeDaySummary.Cooling.Value);
                                        newDay.temperature.summary.heating.imperial.value = day.DegreeDaySummary.Heating.Value;
                                        newDay.temperature.summary.heating.metric.value = metricConverter("F", day.DegreeDaySummary.Heating.Value);
                                        // UV Light
                                        newDay.uv.category = day.AirAndPollen[5].Category;
                                        newDay.uv.value = day.AirAndPollen[5].Value;

                                        for (let i = 0; i < 2; i++){
                                            let cycle = ["", ""];
                                            if (i === 0){
                                                cycle[0] = "day";
                                                cycle[1] = "Day";
                                            } else {
                                                cycle[0] = "night";
                                                cycle[1] = "Night";
                                            }

                                            // Day/Night cycle Information
                                            newDay[cycle[0]].icon = day[cycle[1]].Icon; // Icon
                                            // Text values
                                            newDay[cycle[0]].text.tiny = day[cycle[1]].IconPhrase;
                                            newDay[cycle[0]].text.short = day[cycle[1]].ShortPhrase;
                                            newDay[cycle[0]].text.long = day[cycle[1]].LongPhrase;
                                            // Amount
                                            newDay[cycle[0]].amount.rain.hours = day[cycle[1]].HoursOfRain; // Rain
                                            newDay[cycle[0]].amount.rain.imperial = day[cycle[1]].Rain.Value;
                                            newDay[cycle[0]].amount.rain.metric = metricConverter("in", day[cycle[1]].Rain.Value);
                                            newDay[cycle[0]].amount.ice.hours = day[cycle[1]].HoursOfIce; // Ice
                                            newDay[cycle[0]].amount.ice.imperial = day[cycle[1]].Ice.Value;
                                            newDay[cycle[0]].amount.ice.metric = metricConverter("in", day[cycle[1]].Ice.Value);
                                            newDay[cycle[0]].amount.snow.hours = day[cycle[1]].HoursOfSnow; // Snow
                                            newDay[cycle[0]].amount.snow.imperial = day[cycle[1]].Snow.Value;
                                            newDay[cycle[0]].amount.snow.metric = metricConverter("in", day[cycle[1]].Snow.Value);
                                            newDay[cycle[0]].amount.total.hours = day[cycle[1]].HoursOfPrecipitation; // TotalPrecipitation
                                            newDay[cycle[0]].amount.total.imperial = day[cycle[1]].TotalLiquid.Value;
                                            newDay[cycle[0]].amount.total.metric = metricConverter("in", day[cycle[1]].TotalLiquidValue);
                                            
                                            // Light measures
                                            newDay[cycle[0]].light.cloudCover = day[cycle[1]].CloudCover;
                                            newDay[cycle[0]].light.evapotranspiration.imperial.value = day[cycle[1]].Evapotranspiration.Value;
                                            newDay[cycle[0]].light.evapotranspiration.metric.value = metricConverter("in",day[cycle[1]].Evapotranspiration.Value);
                                            newDay[cycle[0]].light.solarIrradiance.value = day[cycle[1]].SolarIrradiance.Value;

                                            // Probabilities
                                            newDay[cycle[0]].probabilities.rain = day[cycle[1]].RainProbability;
                                            newDay[cycle[0]].probabilities.ice = day[cycle[1]].IceProbability;
                                            newDay[cycle[0]].probabilities.snow = day[cycle[1]].SnowProbability;
                                            newDay[cycle[0]].probabilities.thunderstorm = day[cycle[1]].ThunderstormProbability;
                                            newDay[cycle[0]].probabilities.precipitation = day[cycle[1]].PrecipitacionProbability;

                                            // Wind
                                            newDay[cycle[0]].wind.direction.value = day[cycle[1]].Wind.Direction.Degrees;
                                            newDay[cycle[0]].wind.direction.cardinal = day[cycle[1]].Wind.Direction.English;
                                            newDay[cycle[0]].wind.speed.imperial.value = day[cycle[1]].Wind.Speed.Value;
                                            newDay[cycle[0]].wind.speed.metric.value = metricConverter("mi/h", day[cycle[1]].Wind.Speed.Value);
                                        };
                                    });
                                    await helpers.setCache();
                                    return {success: true, current: _cache.weather.forecast};
                                } catch (e){
                                    return {error: _errors.weather.unavailable, code: _errors.codes.networkConTimeout};
                                };
                            default:
                                return errorHandler(res.status);
                        };
                    } else {
                        return {error: city.error, code: city.code};
                    };
                } else {
                    return {success: true, current: _cache.weather.forecast};
                };
            } else {
                return {error: _errors.weather.activateFunction, code: _errors.codes.preConditionFailed};
            };
        } else {
            return {error: _errors.weather.activate, code: _errors.codes.preConditionRequired};
        };
    } else {
        return {error: _errors.login.noLogin, code: _errors.codes.locked};
    };
};