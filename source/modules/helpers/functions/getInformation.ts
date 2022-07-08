import { _errors } from "../../../errors/errors";

export const getInformation = async (hardware:string, parameters:string): Promise<object> => {
    try {
        let url = `http://localhost:7665/${hardware}`;
        parameters !== '' ? url += `?function=${parameters}` : false;
        const res = await fetch(url, {method: 'GET'});
        switch(res.status){
            case 200:
                return await res.json();  
            default:
                return {error: _errors.information.badRequest, code: _errors.codes.badRequest};   
        };
    } catch {
        return {error: _errors.information.serviceUnavailable, code: _errors.codes.serviceUnavailable};
    }
};