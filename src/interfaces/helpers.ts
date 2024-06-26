import { cacheInterface } from "./cache";
import { errorsInterface } from "./errors";

export interface helpersInterface {
    getCache: (cache: cacheInterface, errors: errorsInterface) => any;
    saveCache: (cache: cacheInterface, errors: errorsInterface) => any;
    getStatus: (errors: errorsInterface) => any;
}

export interface IGetChanges {
    success: boolean,
}

export interface IOnChange {

}