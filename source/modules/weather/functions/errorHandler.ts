import { _errors } from "../../../errors/errors";

export function errorHandler(status: number){
    switch(status){
        case 401:
            return {error: _errors.weather.apiKeyUnauthorized, code: _errors.codes.unauthorized};
        case 500:
            return {error: _errors.weather.unavailable, code: _errors.codes.internalServerError};
        default:
            return {error: _errors.weather.unavailable, code: _errors.codes.internalServerError};
    }
}