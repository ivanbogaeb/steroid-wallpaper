import { _cache } from "../../../cache/cache";

import { setCache } from "../../helpers/functions/cache/set";

import INotes from "../../../interfaces/cache/INotes";

const setNotes = (newNotes:INotes) => {
    _cache.notes = newNotes;
    let {success, data, error, code} = setCache(_cache);
    if (success){
        return {success: true, data: null, error: null, code: code};
    }
    return {success: false, data: null, error: error, code: code};
};

export default setNotes;
