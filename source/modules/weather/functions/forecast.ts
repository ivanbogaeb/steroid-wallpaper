import { _temp } from "../../../temp/temp";
import { _cache } from "../../../cache/cache";
import { _errors } from "../../../errors/errors";

import { settings } from "../../../settings/settings";

import { cityCode } from "./cityCode";
import { errorHandler } from "./errorHandler";
import { helpers } from "../../helpers";
import { weatherTodayCache } from "../../../cache/constants/weather";

export async function forecast(){
    const metricConverter = (type: string, value: number) => {
        switch(type){
            case "in":
                return parseFloat((value*25.4).toFixed(1)); // Returns mm
            case "mi/h":
                return parseFloat((value*1.609344).toFixed(1)); // Returns km/h
            case "F":
                return parseFloat(((value-32)/1.8).toFixed(1)); // Returns C
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
                                    _cache.weather.forecast = {
                                        ..._cache.weather.forecast,
                                        headline: {
                                            type: data.Headline.Category,
                                            text: data.Headline.Text,
                                            severity: data.Headline.Severity,
                                        },
                                        lastRequest: Date.now(),
                                        days: []
                                    }

                                    for (let i = 0; i < data["DailyForecasts"].length; i++){

                                        let day = data["DailyForecasts"][i];
                                        let newDay = {
                                            ...weatherTodayCache,
                                            uv: { // UV Light
                                                category: day.AirAndPollen[5].Category,
                                                value: day.AirAndPollen[5].Value
                                            },
                                            moon: { // Moon Data
                                                age: day.Moon.Age,
                                                set: day.Moon.Set,
                                                rise: day.Moon.Rise,
                                                phase: day.Moon.Phase
                                            },
                                            sun: { // Sun Data
                                                set: day.Sun.Set,
                                                rise: day.Sun.Rise,
                                                hours: day.HoursOfSun,
                                            },
                                            air: { // Air information
                                                quality: { // Quality
                                                    type: day.AirAndPollen[0].Type,
                                                    value: day.AirAndPollen[0].Value,
                                                    category: day.AirAndPollen[0].Category
                                                },
                                                grass: { // Grass
                                                    value: day.AirAndPollen[1].Value,
                                                    category: day.AirAndPollen[1].Category
                                                },
                                                mold: { // Mold
                                                    value: day.AirAndPollen[2].Value,
                                                    category: day.AirAndPollen[2].Category
                                                },
                                                ragweed: { // Ragweed
                                                    value: day.AirAndPollen[3].Value,
                                                    category: day.AirAndPollen[3].Category
                                                },
                                                tree: { // Tree
                                                    value: day.AirAndPollen[4].Value,
                                                    category: day.AirAndPollen[4].Category
                                                }
                                            },
                                            temperature: {
                                                text: { // Temperature Short Text
                                                    minimum: day.RealFeelTemperature.Minimum.Phrase,
                                                    maximum: day.RealFeelTemperature.Maximum.Phrase
                                                },
                                                feel: {
                                                    minimum: {
                                                        metric: {
                                                            value: metricConverter("F", day.RealFeelTemperature.Minimum.Value),
                                                            unit: weatherTodayCache.temperature.feel.minimum.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.RealFeelTemperature.Minimum.Value,
                                                            unit: weatherTodayCache.temperature.feel.minimum.imperial.unit
                                                        }
                                                    },
                                                    maximum: {
                                                        metric: {
                                                            value: metricConverter("F", day.RealFeelTemperature.Maximum.Value),
                                                            unit: weatherTodayCache.temperature.feel.maximum.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.RealFeelTemperature.Maximum.Value,
                                                            unit: weatherTodayCache.temperature.feel.maximum.imperial.unit
                                                        }
                                                    }
                                                },
                                                measure: {
                                                    minimum: {
                                                        metric: {
                                                            value: metricConverter("F", day.Temperature.Minimum.Value),
                                                            unit: weatherTodayCache.temperature.feel.minimum.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.Temperature.Minimum.Value,
                                                            unit: weatherTodayCache.temperature.feel.minimum.imperial.unit
                                                        }
                                                    },
                                                    maximum: {
                                                        metric: {
                                                            value: metricConverter("F", day.Temperature.Maximum.Value),
                                                            unit: weatherTodayCache.temperature.feel.maximum.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.Temperature.Maximum.Value,
                                                            unit: weatherTodayCache.temperature.feel.maximum.imperial.unit
                                                        }
                                                    }
                                                },
                                                summary: {
                                                    cooling: {
                                                        metric: {
                                                            value: metricConverter("F", day.DegreeDaySummary.Cooling.Value),
                                                            unit: weatherTodayCache.temperature.summary.cooling.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.DegreeDaySummary.Cooling.Value,
                                                            unit: weatherTodayCache.temperature.summary.cooling.imperial.unit
                                                        }
                                                    },
                                                    heating: {
                                                        metric: {
                                                            value: metricConverter("F", day.DegreeDaySummary.Heating.Value),
                                                            unit: weatherTodayCache.temperature.summary.heating.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.DegreeDaySummary.Heating.Value,
                                                            unit: weatherTodayCache.temperature.summary.heating.imperial.unit
                                                        }
                                                    }
                                                }
                                            },
                                            day: { // Day cycle Information
                                                icon: day.Day.Icon, // Icon of the Day
                                                text: {
                                                    tiny: day.Day.IconPhrase, // Text summary of daylight, tiny
                                                    short: day.Day.ShortPhrase, // Text summary of daylight, short
                                                    long: day.Day.LongPhrase, // Text summary of daylight, long
                                                },
                                                probabilities: { // Probability of different conditions in % (Up to 100%)
                                                    ice: day.Day.IceProbability,
                                                    rain: day.Day.RainProbability,
                                                    snow: day.Day.SnowProbability,
                                                    thunderstorm: day.Day.ThunderstormProbability,
                                                    precipitation: day.Day.PrecipitacionProbability
                                                },
                                                amount: {
                                                    rain: { // Rain
                                                        hours: day.Day.HoursOfRain,
                                                        metric: {
                                                            value: metricConverter("in", day.Day.Rain.Value),
                                                            unit: weatherTodayCache.day.amount.rain.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.Day.Rain.Value,
                                                            unit: weatherTodayCache.day.amount.rain.imperial.unit
                                                        }
                                                    },
                                                    ice: { // Ice
                                                        hours: day.Day.HoursOfIce,
                                                        metric: {
                                                            value: metricConverter("in", day.Day.Ice.Value),
                                                            unit: weatherTodayCache.day.amount.ice.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.Day.Ice.Value,
                                                            unit: weatherTodayCache.day.amount.ice.imperial.unit
                                                        }
                                                    },
                                                    snow: { // Snow
                                                        hours: day.Day.HoursOfSnow,
                                                        metric: {
                                                            value: metricConverter("in", day.Day.Snow.Value),
                                                            unit: weatherTodayCache.day.amount.snow.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.Day.Snow.Value,
                                                            unit: weatherTodayCache.day.amount.snow.imperial.unit
                                                        }
                                                    },
                                                    total: { // TotalPrecipitation
                                                        hours: day.Day.HoursOfPrecipitation,
                                                        metric: {
                                                            value: metricConverter("in", day.Day.TotalLiquidValue),
                                                            unit: weatherTodayCache.day.amount.total.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.Day.TotalLiquid.Value,
                                                            unit: weatherTodayCache.day.amount.total.imperial.unit
                                                        }
                                                    },
                                                },
                                                light: { // Light measures
                                                    cloudCover: day.Day.CloudCover, // Cloud coverage in % (Up to 100%)
                                                    solarIrradiance: {
                                                        value: day.Day.SolarIrradiance.Value,
                                                        unit: weatherTodayCache.day.light.solarIrradiance.unit
                                                    },
                                                    evapotranspiration: {
                                                        metric: {
                                                            value: metricConverter("in",day.Day.Evapotranspiration.Value),
                                                            unit: weatherTodayCache.day.light.evapotranspiration.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.Day.Evapotranspiration.Value,
                                                            unit: weatherTodayCache.day.light.evapotranspiration.imperial.unit
                                                        },

                                                    }
                                                },
                                                wind: { // Wind
                                                    direction: {
                                                        value: day.Day.Wind.Direction.Degrees,
                                                        cardinal: day.Day.Wind.Direction.English,
                                                        unit: {
                                                            name: weatherTodayCache.day.wind.direction.unit.name,
                                                            unit: weatherTodayCache.day.wind.direction.unit.unit,
                                                        },
                                                    },
                                                    speed: {
                                                        metric: {
                                                            value: metricConverter("mi/h", day.Day.Wind.Speed.Value),
                                                            unit: weatherTodayCache.day.wind.speed.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.Day.Wind.Speed.Value,
                                                            unit: weatherTodayCache.day.wind.speed.imperial.unit
                                                        }
                                                    }
                                                }
                                            },
                                            night: { // Day cycle Information
                                                icon: day.Night.Icon, // Icon of the Day
                                                text: {
                                                    tiny: day.Night.IconPhrase, // Text summary of daylight, tiny
                                                    short: day.Night.ShortPhrase, // Text summary of daylight, short
                                                    long: day.Night.LongPhrase, // Text summary of daylight, long
                                                },
                                                probabilities: { // Probability of different conditions in % (Up to 100%)
                                                    ice: day.Night.IceProbability,
                                                    rain: day.Night.RainProbability,
                                                    snow: day.Night.SnowProbability,
                                                    thunderstorm: day.Night.ThunderstormProbability,
                                                    precipitation: day.Night.PrecipitacionProbability
                                                },
                                                amount: {
                                                    rain: { // Rain
                                                        hours: day.Night.HoursOfRain,
                                                        metric: {
                                                            value: metricConverter("in", day.Night.Rain.Value),
                                                            unit: weatherTodayCache.night.amount.rain.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.Night.Rain.Value,
                                                            unit: weatherTodayCache.night.amount.rain.imperial.unit
                                                        }
                                                    },
                                                    ice: { // Ice
                                                        hours: day.Night.HoursOfIce,
                                                        metric: {
                                                            value: metricConverter("in", day.Night.Ice.Value),
                                                            unit: weatherTodayCache.night.amount.ice.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.Night.Ice.Value,
                                                            unit: weatherTodayCache.night.amount.ice.imperial.unit
                                                        }
                                                    },
                                                    snow: { // Snow
                                                        hours: day.Night.HoursOfSnow,
                                                        metric: {
                                                            value: metricConverter("in", day.Night.Snow.Value),
                                                            unit: weatherTodayCache.night.amount.snow.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.Night.Snow.Value,
                                                            unit: weatherTodayCache.night.amount.snow.imperial.unit
                                                        }
                                                    },
                                                    total: { // TotalPrecipitation
                                                        hours: day.Night.HoursOfPrecipitation,
                                                        metric: {
                                                            value: metricConverter("in", day.Night.TotalLiquidValue),
                                                            unit: weatherTodayCache.night.amount.total.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.Night.TotalLiquid.Value,
                                                            unit: weatherTodayCache.night.amount.total.imperial.unit
                                                        }
                                                    },
                                                },
                                                light: { // Light measures
                                                    cloudCover: day.Night.CloudCover, // Cloud coverage in % (Up to 100%)
                                                    solarIrradiance: {
                                                        value: day.Night.SolarIrradiance.Value,
                                                        unit: weatherTodayCache.night.light.solarIrradiance.unit
                                                    },
                                                    evapotranspiration: {
                                                        metric: {
                                                            value: metricConverter("in",day.Night.Evapotranspiration.Value),
                                                            unit: weatherTodayCache.night.light.evapotranspiration.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.Night.Evapotranspiration.Value,
                                                            unit: weatherTodayCache.night.light.evapotranspiration.imperial.unit
                                                        },

                                                    }
                                                },
                                                wind: { // Wind
                                                    direction: {
                                                        value: day.Night.Wind.Direction.Degrees,
                                                        cardinal: day.Night.Wind.Direction.English,
                                                        unit: {
                                                            name: weatherTodayCache.night.wind.direction.unit.name,
                                                            unit: weatherTodayCache.night.wind.direction.unit.unit,
                                                        },
                                                    },
                                                    speed: {
                                                        metric: {
                                                            value: metricConverter("mi/h", day.Night.Wind.Speed.Value),
                                                            unit: weatherTodayCache.night.wind.speed.metric.unit
                                                        },
                                                        imperial: {
                                                            value: day.Night.Wind.Speed.Value,
                                                            unit: weatherTodayCache.night.wind.speed.imperial.unit
                                                        }
                                                    }
                                                }
                                            }
                                        };

                                        if (i === 0){
                                            _cache.weather.today = newDay;
                                        } else {
                                            _cache.weather.forecast.days.push(newDay);
                                        };
                                        
                                    };

                                    helpers.setCache(_cache);

                                    return {success: true, data: { today: _cache.weather.today, forecast: _cache.weather.forecast }, error: null, code: res.status};
                                } catch (e){
                                    return {sucess: false, data: null, error: _errors.weather.unavailable, code: _errors.codes.networkConTimeout};
                                };
                            default:
                                return errorHandler(res.status);
                        };
                    } else {
                        return {sucess: false, data: null, error: city.error, code: city.code};
                    };
                } else {
                    return {success: true, data: { today: _cache.weather.today, forecast: _cache.weather.forecast }, error: null, code: 200};
                };
            } else {
                return {sucess: false, data: null, error: _errors.weather.activateFunction, code: _errors.codes.preConditionFailed};
            };
        } else {
            return {sucess: false, data: null, error: _errors.weather.activate, code: _errors.codes.preConditionRequired};
        };
    } else {
        return {sucess: false, data: null, error: _errors.login.noLogin, code: _errors.codes.locked};
    };
};