import { _errors } from "../../errors/errors";

export const execute = async (executable:string, parameters:string) => {
    try {
        const res = await fetch(`http://localhost:7665/execute?executable=${encodeURIComponent(executable)}&parameters=${encodeURIComponent(parameters)}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `executable=${executable}&parameters=${parameters}`
        });
        switch(res.status){
            case 200:
                let response = await res.json();
                if (response.executed){
                    return {success: true};
                } else {
                    return {error: response.error};
                }
            default:
                return {error: "Seems like you have performed a execution request, please try again.", code: _errors.codes.badRequest};  
        };
    } catch {
        return {error: _errors.information.serviceUnavailable, code: _errors.codes.serviceUnavailable};
    }
};