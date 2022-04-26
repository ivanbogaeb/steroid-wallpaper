import { codesInterface } from "../../interfaces/errors/codesErrorInterface";

export const codes: codesInterface = {
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    methodNotAllowed: 405,
    notAcceptable: 406,
    conflict: 409,
    preConditionFailed: 412,
    locked: 423,
    upgradeRequired: 426,
    preConditionRequired: 428,
    tooManyRequests: 429,
    internalServerError: 500,
    notImplemented: 501,
    serviceUnavailable: 503,
    networkAuthRequired: 511,
    networkConTimeout: 599
}