import {weather} from './constants/weather';
import {spotify} from './constants/spotify';
import {user} from './constants/user';

import { cacheInterface } from '../interfaces/cache';

export const _cache:cacheInterface = {
    weather: weather,
    spotify: spotify,
    user: user,
};