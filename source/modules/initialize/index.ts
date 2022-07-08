import { _temp } from "../../temp/temp";
import { _cache } from "../../cache/cache";
import { _errors } from "../../errors/errors";
import { settings } from "../../settings/settings";

import { helpers } from "../helpers";

export async function initialize(userId: string, wallpaperToken: string): Promise<object> {
    let cache = _cache;
    const verification = async function(userId: string, wallpaperToken: string){
        const res = await fetch('https://steroidapp.ddns.net/api/verification', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `user_id=${userId}&wallpaper_token=${wallpaperToken}`,
        });
        switch(res.status){
            case 200:
                return {success: true, data: await res.json()};
            case 401: 
                return {error: _errors.login.unauthorized, code: _errors.codes.unauthorized}; 
            case 429:
                return {error: _errors.login.cooldown, code: _errors.codes.tooManyRequests};
            default:
                return {error: _errors.offline.noService, code: _errors.codes.serviceUnavailable};
        };
    };
    let verificationData = await verification(userId, wallpaperToken);
    if (verificationData.success){
        let {success, data, error, code} = await helpers.getCache();
        if (success){
            if (data){
                data.userId = userId;
                data.wallpaperToken = wallpaperToken;
                cache = data;
                if (cache.weather.location !== verificationData.data.user_location){
                    cache.weather.location = verificationData.data.user_location;
                    cache.weather.city.name = "";
                    cache.weather.city.state = "";
                    cache.weather.city.country = "";
                    cache.weather.city.region = "";
                    cache.weather.city.latitude = 0;
                    cache.weather.city.longitude = 0;
                    cache.weather.city.timezone = 0;
                    cache.weather.city.key = "";
                };
                if (cache.weather.apiKey !== verificationData.data.weather_api){
                    cache.weather.apiKey = verificationData.data.weather_api;
                };
                if (cache.spotify.refreshToken !== verificationData.data.spotify_token){
                    cache.spotify.refreshToken = verificationData.data.spotify_token;
                };
            } else {
                cache.user.userId = userId;
                cache.user.wallpaperToken = wallpaperToken;
                cache.weather.location = verificationData.data.user_location;
                cache.weather.apiKey = verificationData.data.weather_api;
                cache.spotify.refreshToken = verificationData.data.spotify_token;
                for (let i = 0; i < settings.weather.forecast_days; i++){
                    cache.weather.forecast.days[i] = JSON.parse(JSON.stringify(cache.weather.today));
                };
            };
            _temp.user.loggedIn = true;
            return helpers.setCache();
        } else {
            return {error: error, code: code};
        }
    } else {
        if (verificationData.code === _errors.codes.serviceUnavailable){
            _temp.user.loggedIn = true;
        }
        return {error: verificationData.error, code: verificationData.code};
    };
}