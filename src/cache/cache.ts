import {user} from './constants/user';
import notes from './constants/notes';
import {spotify} from './constants/spotify';
import {weather} from './constants/weather';
import schedule from './constants/schedule';

import { cacheInterface } from '../interfaces/cache';

export const _cache:cacheInterface = {
    user: user,
    notes: notes,
    spotify: spotify,
    weather: weather,
    schedule: schedule,
};