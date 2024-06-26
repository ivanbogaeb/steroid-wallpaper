import { _cache } from "../../../cache/cache";

import { setCache } from "../../helpers/functions/cache/set";

import ISchedule from "../../../interfaces/cache/ISchedule";

const setSchedule = (newSchedule:ISchedule) => {
    _cache.schedule = newSchedule;
    let {success, data, error, code} = setCache(_cache);
    if (success){
        return {success: true, data: null, error: null, code: code};
    }
    return {success: false, data: null, error: error, code: code};
};

export default setSchedule;
