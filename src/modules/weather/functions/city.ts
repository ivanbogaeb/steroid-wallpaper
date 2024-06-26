import { _temp } from "../../../temp/temp";
import { _cache } from "../../../cache/cache";
import { _errors } from "../../../errors/errors";
import { settings } from "../../../settings/settings";

import { cityCode } from "./cityCode";

export async function city():Promise<any> {
    if (_temp.user.loggedIn){
        if (settings.weather.active){
            if (_cache.weather.city.key !== ""){
                return {success: true, data: { city: _cache.weather.city, location: _cache.weather.location }, error: null, code: 200};
            } else {
                const {success, data, error, code} = await cityCode();
                if (success){
                    return {success: true, data: { city: _cache.weather.city, location: _cache.weather.location }, error: null, code: 200}
                };
                return {success: false, data: null, error: error, code: code}
            };
        } else {
            return {sucess: false, data: null, error: _errors.weather.activate, code: _errors.codes.preConditionRequired};
        }
    } else {
        return {sucess: false, data: null, error: _errors.login.noLogin, code: _errors.codes.locked};
    }
};