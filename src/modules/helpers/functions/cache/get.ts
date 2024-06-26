import {_errors} from '../../../../errors/errors';
import { cacheInterface } from '../../../../interfaces/cache';

export function getCache(): {success: boolean, data: cacheInterface | null, error: null | string, code: number} {
    try {
        let cacheData: any = localStorage.getItem("steroid");
        return {success: true, data: JSON.parse(cacheData), error: null, code: 200};
    } catch(e){
        return {success: false, data: null, error: "LocalStorage is not available.", code: _errors.codes.preConditionFailed};
    };
};