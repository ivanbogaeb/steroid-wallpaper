import { _cache } from "../../../cache/cache";

import { helpers } from "../../helpers";

export function timerReset(){
    _cache.weather.forecast.lastRequest = 0;
    _cache.weather.current.lastRequest = 0;
    return helpers.setCache(_cache);
};