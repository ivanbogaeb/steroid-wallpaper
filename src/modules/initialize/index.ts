import config from "../../config";

import { _temp } from "../../temp/temp";
import { _cache } from "../../cache/cache";
import { _errors } from "../../errors/errors";

import { getCache } from "../helpers/functions/cache/get";
import { updateCache } from "../helpers/functions/cache/update";
import controlChanges from "../helpers/functions/api/changes/control";

export async function initialize(email: string, token: string) {
    const verification = async function(email: string, token: string){
        try {
            const res = await fetch(`${config.url.api}/verification`, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: `user_id=${email}&wallpaper_token=${token}`,
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

        } catch {
            return {error: _errors.offline.noService, code: _errors.codes.serviceUnavailable};
        }
    };
    let verificationData = await verification(email, token);
    if (verificationData.success){
        _temp.user.email = email;
        _temp.user.token = token;
        _temp.user.updated = verificationData.data.updated;
        let {success, data, error, code} = getCache();
        let update = updateCache(_cache, verificationData.data);
        if (!_temp.user.loggedIn){
            if (success){
                controlChanges(true);
            } else {
                return {sucess: false, data: null, error: error, code: code};
            }
        }
        _temp.user.loggedIn = true;
        return update;
    } else {
        if (verificationData.code === _errors.codes.serviceUnavailable){
            _temp.user.loggedIn = true;
            let {success, data, error, code} = getCache();
            if (data){
                updateCache(data, {updated: data.user.updated});
                return {success: false, data: data, error: verificationData.error, code: verificationData.code};
            } else {
                updateCache(data, {updated: 0}); // Set the updated information to none, so next time when it connects, you get updated
            };
        }
        return {success: false, data: null, error: verificationData.error, code: verificationData.code};
    };
}