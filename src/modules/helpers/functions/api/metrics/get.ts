import config from "../../../../../config";
import { _errors } from "../../../../../errors/errors";

const getMetrics = async (hardware:string): Promise<object> => {
    try {
        const res = await fetch(`${config.url.service}/${hardware}`, {method: 'GET'});
        switch(res.status){
            case 200:
                return await res.json();
            default:
                return {error: _errors.metrics.badRequest, code: _errors.codes.badRequest};    
        }
    } catch {
        return {error: _errors.metrics.serviceUnavailable, code: _errors.codes.serviceUnavailable};
    }
};

export default getMetrics;