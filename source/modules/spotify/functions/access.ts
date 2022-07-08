import { _temp } from "../../../temp/temp";
import { _cache } from "../../../cache/cache";
import { _errors } from "../../../errors/errors";
import { settings } from "../../../settings/settings";

import { helpers } from "../../helpers";

export async function access():Promise<any> {
    if (_temp.user.loggedIn){
        if (settings.spotify.active){
            const res = await fetch("https://accounts.spotify.com/api/token", {
                method: "POST",
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ZmY3NjYyZTAyMDg3NDk3MGEwMTAxNzNjMjA0MzljNTc6NzMwNmQ1ZGU0NWZjNGVlZDk0NDkzYjk3NTY0YmYxMTE='
                },
                body: `grant_type=refresh_token&refresh_token=${_cache.spotify.refreshToken}`
            });

            switch(res.status){
                case 200:
                    const data = await res.json();
                    if (data.access_token !== undefined){
                        _cache.spotify.accessToken = data.access_token;
                        _cache.spotify.tokenType = data.token_type;
                        _cache.spotify.scope = data.scope;
                        _cache.spotify.expiresIn = data.expires_in;
                        helpers.setCache();
                        return {success: true};
                    };
                case 401:
                    return {error: _errors.spotify.refresh, code: _errors.codes.unauthorized};
                default:
                    return {error: _errors.spotify.issue, code: _errors.codes.serviceUnavailable};
            };
        } else {
            return {error: _errors.spotify.activate, code: _errors.codes.preConditionRequired};
        }
    } else {
        return {error: _errors.login.noLogin, code: _errors.codes.locked};
    };
};