import {getCache} from './functions/cache/get';
import onChange from './functions/api/changes/on';

export const helpers = {
    get: getCache,
    onChange: onChange,
};