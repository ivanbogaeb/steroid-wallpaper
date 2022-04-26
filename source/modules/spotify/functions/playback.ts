import { _temp } from "../../../temp/temp";
import { _cache } from "../../../cache/cache";
import { _errors } from "../../../errors/errors";

import { access } from "./access";
import { progress } from "./progress";
import { clearCache } from "./clearCache";
import { processPlayback } from "./processPlayback";

import { settings } from "../../../settings/settings";

export async function playback(this: any):Promise<object> {
    if (_temp.user.loggedIn){
        if (settings.spotify.active){
            if (_temp.spotify.lastRequest < Date.now()){
                _temp.spotify.lastRequest = Date.now() + settings.spotify.requestDelay;
                try {
                    const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing?market=us", {
                        method: "GET",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": `${_cache.spotify.tokenType} ${_cache.spotify.accessToken}`
                        }
                    });
                    switch(res.status){
                        case 200:
                            return await processPlayback(res);
                        case 204:
                            return {stop: true};
                        case 400:
                            let bearer = await access();
                            if (bearer?.success){
                                return await playback();
                            } else {
                                return {error: _errors.spotify.refresh, code: res.status};
                            };
                        case 401:
                            let refresh = await access();
                            if (refresh?.success){
                                return await playback();
                            } else {
                                return {error: _errors.spotify.refresh, code: res.status};
                            };
                        case 429:
                            _temp.spotify.lastRequest = Date.now() + (Number(res.headers.get("Retry-After")) * 1000);
                            if (_temp.spotify.song.name !== ""){
                                if (_temp.spotify.song.play !== false){
                                    return progress(0);
                                } else {
                                    return _temp.spotify.song;
                                };
                            } else {
                                return {stop: true};
                            };
                        default:
                            return {error: _errors.spotify.issue, code: res.status};
                    };
                } catch (error) {
                    clearCache();
                    return {stop: true};
                }
            } else {
                if (_temp.spotify.song.name !== ""){
                    if (_temp.spotify.song.play !== false){
                            return progress(0);
                    };
                    return _temp.spotify.song;
                } else {
                    return {stop: true};
                };
            };
        } else {
            return {error: _errors.spotify.activate, code: _errors.codes.preConditionRequired};
        };
    } else {
        return {error: _errors.login.noLogin, code: _errors.codes.locked};
    }
}