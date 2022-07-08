import { _errors } from "../../../errors/errors";

export const getMetrics = async (hardware:string): Promise<object> => {
    try {
        const res = await fetch(`http://localhost:7666/${hardware}`, {method: 'GET'});
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