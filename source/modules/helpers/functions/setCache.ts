import { _errors } from "../../../errors/errors";
import { cacheInterface } from "../../../interfaces/cache";

export function setCache(cache:cacheInterface): any {
    try {
        localStorage.setItem("steroid", JSON.stringify(cache));
        return {success: true, data: null, error: null, code: 200};
    } catch(e){
        return {error: "LocalStorage is not available.", code: _errors.codes.preConditionFailed};
    };
};