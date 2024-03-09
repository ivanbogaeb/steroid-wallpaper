import {getCache} from './functions/getCache';
import {setCache} from './functions/setCache';
import {getStatus} from './functions/getStatus';

import { cacheInterface } from '../../interfaces/cache';

export const helpers = {
    getCache: getCache,
    getStatus: getStatus,
    setCache: (cache: cacheInterface) => {
        return setCache(cache);
    }
};