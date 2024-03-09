import { _temp } from "../../../temp/temp";
import { _cache } from "../../../cache/cache";
import { _errors } from "../../../errors/errors";
import { settings } from "../../../settings/settings";

import { helpers } from "../../helpers";
import {errorHandler} from "./errorHandler";

export async function cityCode():Promise<any> {
    if (_temp.user.loggedIn){
        if (settings.weather.active){
            if (_cache.weather.city.key === ""){
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
                            _cache.weather.city = {
                                key: data[0].Key,
                                name: data[0].EnglishName,
                                state: data[0].AdministrativeArea.EnglishName,
                                region: data[0].Region.EnglishName,
                                country: data[0].Country.EnglishName,
                                timezone: data[0].TimeZone.GmtOffset,
                                latitude: data[0].GeoPosition.Latitude,
                                longitude: data[0].GeoPosition.Longitude,
                            }
                            helpers.setCache(_cache);
                            return {success: true, data: data[0].Key, error: null, code: res.status};
                        } else {
                            return {success: false, data: null, error: _errors.weather.locationNotFound, code: _errors.codes.notFound};
                        }
                    default:
                        return errorHandler(res.status);
                };
            } else {
                return {success: true, data: _cache.weather.city.key, error: null, code: 200};
            };
        } else {
            return {sucess: false, data: null, error: _errors.weather.activate, code: _errors.codes.preConditionRequired};
        }
    } else {
        return {sucess: false, data: null, error: _errors.login.noLogin, code: _errors.codes.locked};
    }
};