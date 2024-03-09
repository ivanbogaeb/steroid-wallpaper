import {_errors} from '../../../errors/errors';

export function getCache(): any {
    try {
        let cacheData: any = localStorage.getItem("steroid");
        return {success: true, data: JSON.parse(cacheData), error: null, code: 200};
    } catch(e){
        return {error: "LocalStorage is not available.", code: _errors.codes.preConditionFailed};
    };
};