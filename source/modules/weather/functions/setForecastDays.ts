import { _cache } from "../../../cache/cache";
import { _errors } from "../../../errors/errors";
import { settings } from "../../../settings/settings";

import { helpers } from "../../helpers/helpers";

export function setForecastDays(days: number){
    if (days <= 4){
        if (settings.weather.forecast_days !== days){
            settings.weather.forecast_days = days;
            for (let i = 0; i < days; i++){
                _cache.weather.forecast.days.pop();
            };
            return helpers.setCache();
        };
    }
    return {error: "Your forecast days  can only be between 1 and 4", code: _errors.codes.notAcceptable};
};