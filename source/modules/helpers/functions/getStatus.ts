import { errorsInterface } from "../../../interfaces/errors";

export async function getStatus(errors: errorsInterface): Promise<object> {
    
    const res = await fetch('https://steroidapp.ddns.net', {
        method: 'GET',
    });

    switch(res.status){
        case 200:
            return {success: true};
        case 429:
            return {error: errors.login.cooldown, code: errors.codes.tooManyRequests};
        default:
            return {error: errors.offline.noService, code: errors.codes.serviceUnavailable};
    };
};