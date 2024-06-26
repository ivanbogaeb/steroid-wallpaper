import { getCache } from "../../helpers/functions/cache/get";

const getSchedule = () => {
    let {success, data, error, code} = getCache();
    if (success){
        return {success: true, data: data?.schedule, error: null, code: code};
    }
    return {success: false, data: null, error: error, code: code};
};

export default getSchedule;
