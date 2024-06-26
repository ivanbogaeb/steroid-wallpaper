import { getCache } from "../../helpers/functions/cache/get";

const getNotes = () => {
    let {success, data, error, code} = getCache();
    if (success){
        return {success: true, data: data?.notes, error: null, code: code};
    }
    return {success: false, data: null, error: error, code: code};
};

export default getNotes;
