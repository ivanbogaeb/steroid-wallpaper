import { _errors } from "../../../../errors/errors";

import { cacheInterface } from "../../../../interfaces/cache";
import ISetCache from "../../../../interfaces/cache/ISetInterface";

export function setCache(cache:cacheInterface): ISetCache {
    try {
        localStorage.setItem("steroid", JSON.stringify(cache));
        return {success: true, data: null, error: null, code: 200};
    } catch(e){
        return {success: false, data: null, error: "LocalStorage is not available.", code: _errors.codes.preConditionFailed};
    };
};