import { _temp } from "../../temp/temp";
import { _cache } from "../../cache/cache";
import { _errors } from "../../errors/errors";

import { helpers } from "../helpers";
import { weather } from "../../cache/constants/weather";

export async function initialize(userId: string, wallpaperToken: string): Promise<object> {
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
                _cache.user = { ...data.user };
                _cache.weather = { ...data.weather };
                _cache.spotify = { ...data.spotify };
                if (_cache.weather.location !== verificationData.data.user_location){
                    _cache.weather.city = weather.city;
                    _cache.weather.location = verificationData.data.user_location;
                };
                if (_cache.weather.apiKey !== verificationData.data.weather_api){
                    _cache.weather.apiKey = verificationData.data.weather_api;
                };
                if (_cache.spotify.refreshToken !== verificationData.data.spotify_token){
                    _cache.spotify.refreshToken = verificationData.data.spotify_token;
                };
            } else {
                _cache.user = {
                    userId: userId,
                    wallpaperToken: wallpaperToken,
                };
                _cache.weather.location = verificationData.data.user_location;
                _cache.spotify.refreshToken = verificationData.data.spotify_token;
                _cache.weather.apiKey = verificationData.data.weather_api;
                for (let i = 0; i < 4; i++){
                    _cache.weather.forecast.days[i] = JSON.parse(JSON.stringify(weather.today));
                };
            };
            _temp.user.loggedIn = true;
            return helpers.setCache(_cache);
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