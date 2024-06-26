import { _temp } from "../../../temp/temp";
import { _cache } from "../../../cache/cache";
import { _errors } from "../../../errors/errors";

import { settings } from "../../../settings/settings";

import { cityCode } from "./cityCode";
import { errorHandler } from "./errorHandler";
import { setCache } from "../../helpers/functions/cache/set";

export async function current(){
    if (_temp.user.loggedIn){
        if (settings.weather.active){
            if (settings.weather.current){
                if ((Date.now() - _cache.weather.current.lastRequest) > settings.weather.waitingTime.current){
                    const city = await cityCode();
                    if (city.success){
                        const res = await fetch(
                            `https://dataservice.accuweather.com/currentconditions/v1/${_cache.weather.city.key}?apikey=${_cache.weather.apiKey}&details=true`,
                            {
                                method: "GET",
                                headers: {"Accept-Encoding": "gzip"}
                            },
                        );
                        switch(res.status){
                            case 200:
                                try {
                                    let [data] = await res.json();
                                    let current = _cache.weather.current;
                                    // General
                                    current.text = data.WeatherText;
                                    current.icon = data.WeatherIcon;
                                    current.isDayTime = data.IsDayTime;
                                    current.humidity = data.RelativeHumidity;
                                    current.lastRequest = Date.now();
                                    // Temperature
                                    current.temperature.measure.metric.value = data.Temperature.Metric.Value;
                                    current.temperature.measure.imperial.value = data.Temperature.Imperial.Value;
                                    current.temperature.feel.metric.value = data.RealFeelTemperature.Metric.Value;
                                    current.temperature.feel.imperial.value = data.RealFeelTemperature.Imperial.Value;
                                    current.temperature.text = data.RealFeelTemperature.Metric.Phrase;
                                    // Wind
                                    current.wind.direction.value = data.Wind.Direction.Degrees;
                                    current.wind.direction.cardinal = data.Wind.Direction.English;
                                    current.wind.speed.metric.value = data.Wind.Speed.Metric.Value;
                                    current.wind.speed.imperial.value = data.Wind.Speed.Imperial.Value;
                                    // UV
                                    current.uv.index = data.UVIndex;
                                    current.uv.text = data.UVIndexText;
                                    // Visibility
                                    current.visibility.metric = data.Visibility.Metric.Value;
                                    current.visibility.imperial = data.Visibility.Imperial.Value;
                                    // Cloud
                                    current.cloud.coverage = data.CloudCover;
                                    current.cloud.ceiling.metric.value = data.Ceiling.Metric.Value;
                                    current.cloud.ceiling.imperial.value = data.Ceiling.Imperial.Value;
                                    // Pressure
                                    current.pressure.metric.value = data.Pressure.Metric.Value;
                                    current.pressure.imperial.value = data.Pressure.Imperial.Value;
                                    // Precipitation
                                    current.precipitation.has = data.HasPrecipitation;
                                    current.precipitation.type = data.PrecipitationType;
                                    current.precipitation.measure.metric.value = data.PrecipitationSummary.Precipitation.Metric.Value;
                                    current.precipitation.measure.imperial.value = data.PrecipitationSummary.Precipitation.Imperial.Value;
                                    current.precipitation.summary.pastHour.metric.value = data.PrecipitationSummary.PastHour.Metric.Value;
                                    current.precipitation.summary.pastHour.imperial.value = data.PrecipitationSummary.PastHour.Imperial.Value;
                                    current.precipitation.summary.past3Hours.metric.value = data.PrecipitationSummary.Past3Hours.Metric.Value;
                                    current.precipitation.summary.past3Hours.imperial.value = data.PrecipitationSummary.Past3Hours.Imperial.Value;
                                    current.precipitation.summary.past6Hours.metric.value = data.PrecipitationSummary.Past6Hours.Metric.Value;
                                    current.precipitation.summary.past6Hours.imperial.value = data.PrecipitationSummary.Past6Hours.Imperial.Value;
                                    current.precipitation.summary.past12Hours.metric.value = data.PrecipitationSummary.Past12Hours.Metric.Value;
                                    current.precipitation.summary.past12Hours.imperial.value = data.PrecipitationSummary.Past12Hours.Imperial.Value;
                                    current.precipitation.summary.past18Hours.metric.value = data.PrecipitationSummary.Past18Hours.Metric.Value;
                                    current.precipitation.summary.past18Hours.imperial.value = data.PrecipitationSummary.Past18Hours.Imperial.Value;
                                    current.precipitation.summary.past24Hours.metric.value = data.PrecipitationSummary.Past24Hours.Metric.Value;
                                    current.precipitation.summary.past24Hours.imperial.value = data.PrecipitationSummary.Past24Hours.Imperial.Value;
                                    setCache(_cache);
                                    return {success: true, data: _cache.weather.current, error: null, code: res.status};
                                } catch (e){
                                    return {sucess: false, data: null, error: _errors.weather.unavailable, code: _errors.codes.networkConTimeout};
                                }
                            default:
                                return errorHandler(res.status);
                        }
                    } else {
                        return {sucess: false, data: null, error: city.error, code: city.code};
                    }
                } else {
                    return {success: true, data: _cache.weather.current, error: null, code: 200};
                }
            } else {
                return {sucess: false, data: null, error: _errors.weather.activateFunction, code: _errors.codes.preConditionFailed};
            }
        } else {
            return {sucess: false, data: null, error: _errors.weather.activate, code: _errors.codes.preConditionRequired};
        }
    } else {
        return {sucess: false, data: null, error: _errors.login.noLogin, code: _errors.codes.locked};
    }
};