import {_errors} from '../../../errors/errors';

export async function getStatus(): Promise<object> {
    
    const res = await fetch('https://steroidapp.ddns.net', {
        method: 'GET',
    });

    switch(res.status){
        case 200:
            return {success: true, data: null, error: null, code: 200};
        case 429:
            return {success: false, data: null, error: _errors.login.cooldown, code: _errors.codes.tooManyRequests};
        default:
            return {success: false, data: null, error: _errors.offline.noService, code: _errors.codes.serviceUnavailable};
    };
};