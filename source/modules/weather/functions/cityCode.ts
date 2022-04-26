import { _temp } from "../../../temp/temp";
import { _cache } from "../../../cache/cache";
import { _errors } from "../../../errors/errors";
import { settings } from "../../../settings/settings";

import { helpers } from "../../helpers/helpers";
import {errorHandler} from "./errorHandler";

export async function cityCode():Promise<any> {
    if (_temp.user.loggedIn){
        if (settings.weather.active){
            if (_cache.weather.city.key == ""){
                const res = await fetch(
                    `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${_cache.weather.apiKey}&q=${_cache.weather.location}&language=en-USoffset=1`, 
                    {
                        method: "GET",
                        headers: {"Accept-Encoding": "gzip"}
                    },
                );
                switch(res.status){
                    case 200:
                        let data = await res.json();
                        if (data.length > 0){
                            _cache.weather.city.name = data[0].EnglishName;
                            _cache.weather.city.state = data[0].AdministrativeArea.EnglishName;
                            _cache.weather.city.country = data[0].Country.EnglishName;
                            _cache.weather.city.region = data[0].Region.EnglishName;
                            _cache.weather.city.latitude = data[0].GeoPosition.Latitude;
                            _cache.weather.city.longitude = data[0].GeoPosition.Longitude;
                            _cache.weather.city.timezone = data[0].TimeZone.GmtOffset;
                            _cache.weather.city.key = data[0].Key;
                            helpers.setCache();
                            return {success: true, data: data[0].Key};
                        } else {
                            return {error: _errors.weather.locationNotFound, code: _errors.codes.notFound};
                        }
                    default:
                        return errorHandler(res.status);
                };
            } else {
                return {success: true, data: _cache.weather.city.key};
            };
        } else {
            return {error: _errors.weather.activate, code: _errors.codes.preConditionRequired};
        }
    } else {
        return {error: _errors.login.noLogin, code: _errors.codes.locked};
    }
};