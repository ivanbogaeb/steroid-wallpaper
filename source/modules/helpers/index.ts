import {_cache} from '../../cache/cache';
import {_errors} from '../../errors/errors';

import {getCache} from './functions/getCache';
import {getStatus} from './functions/getStatus';
import {setCache} from './functions/setCache';

export const helpers = {
    getCache: () => {
        return getCache(_cache, _errors);
    },
    getStatus: () => {
        return getStatus(_errors);
    },
    setCache: () => {
        return setCache(_cache, _errors);
    }
};