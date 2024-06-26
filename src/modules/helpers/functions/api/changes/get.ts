import config from "../../../../../config";

import { _temp } from "../../../../../temp/temp";
import { _errors } from "../../../../../errors/errors";
import setChanges from "./set";
import { initialize } from "../../../../initialize";

const getChanges = async ():Promise<object> => {

    const changes = await fetch(`${config.url.api}/changes`, {
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `user_id=${_temp.user.email}&wallpaper_token=${_temp.user.token}&updated=${_temp.user.updated}`
    });

    switch(changes.status){
        case 200:
            let data = await changes.json();
            let resync = await initialize(_temp.user.email, _temp.user.token);
            if (resync.success){
                let set = setChanges(data);
                if (set){
                    return { success: true, data: data, error: null, code: 200 };
                };
            }
            return {success: false, data: null, error: resync.error, code: resync.code}
        case 204:
            return {success: true, data: null, error: null, code: 204}
        case 401:
            return {success: false, data: null, error: _errors.login.unauthorized, code: _errors.codes.unauthorized}
        default:
            return {success: false, data: null, error: _errors.offline.noService, code: _errors.codes.serviceUnavailable}
    };
};

export default getChanges;