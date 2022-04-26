import { cacheInterface } from "../../../interfaces/cache";
import { errorsInterface } from "../../../interfaces/errors";

export function getCache(cache: cacheInterface, errors: errorsInterface):any {
    try {
        localStorage.setItem("steroidData", JSON.stringify(cache));
        return {success: true}
    } catch(e){
        return {error: "LocalStorage is not available.", code: errors.codes.preConditionFailed};
    };
};