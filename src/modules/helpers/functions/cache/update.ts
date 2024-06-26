import { _temp } from "../../../../temp/temp";
import { _cache } from "../../../../cache/cache";
import { weather } from "../../../../cache/constants/weather";

import { setCache } from "./set";

import { cacheInterface } from "../../../../interfaces/cache";

export const updateCache = (cacheData: cacheInterface | null, apiData:any) => {

    if (_cache.user.updated === 0){
        _cache.user = { // Always update user data
            email: _temp.user.email,
            token: _temp.user.token,
            updated: 0, 
        };
    };

    if (cacheData){ // If cache data exists
        if (apiData.updated !== cacheData.user.updated){ // If something has been updated
            if (_cache.weather.location !== apiData.user_location){
                _cache.weather.city = weather.city;
                _cache.weather.location = apiData.user_location;
            };
            if (_cache.weather.apiKey !== apiData.weather_api){
                _cache.weather.apiKey = apiData.weather_api;
            };
            if (_cache.spotify.refreshToken !== apiData.spotify_token){
                _cache.spotify.refreshToken = apiData.spotify_token;
            };
            _cache.notes = apiData.notes;
            _cache.schedule = apiData.schedule;
            _cache.user.updated = apiData.updated;
            
        } else { // Just copy the cache to memory
            _cache.user = { ...cacheData.user };
            _cache.notes = { ...cacheData.notes };
            _cache.weather = { ...cacheData.weather };
            _cache.spotify = { ...cacheData.spotify };
            _cache.schedule = { ...cacheData.schedule };
        };
    } else { // Create a new cache memory bank
        _cache.notes = apiData.notes;
        _cache.schedule = apiData.schedule;
        _cache.weather.apiKey = apiData.weather_api;
        _cache.weather.location = apiData.user_location;
        _cache.spotify.refreshToken = apiData.spotify_token;

        for (let i = 0; i < 4; i++){
            _cache.weather.forecast.days[i] = JSON.parse(JSON.stringify(weather.today));
        };
    };

    return setCache(_cache);

};