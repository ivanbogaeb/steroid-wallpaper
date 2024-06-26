import { _cache } from "../../../cache/cache";
import { setCache } from "../../helpers/functions/cache/set";

export function timerReset(){
    _cache.weather.forecast.lastRequest = 0;
    _cache.weather.current.lastRequest = 0;
    return setCache(_cache);
};