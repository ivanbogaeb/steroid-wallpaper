import { _errors } from "../../../errors/errors";

export function errorHandler(status: number){
    switch(status){
        case 401:
            return {sucess: false, data: null, error: _errors.weather.apiKeyUnauthorized, code: _errors.codes.unauthorized};
        case 500:
            return {sucess: false, data: null, error: _errors.weather.unavailable, code: _errors.codes.internalServerError};
        default:
            return {sucess: false, data: null, error: _errors.weather.unavailable, code: _errors.codes.internalServerError};
    }
}