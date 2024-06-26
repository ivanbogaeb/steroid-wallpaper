import {login} from './constants/login';
import {codes} from './constants/codes';
import {offline} from './constants/offline';
import {weather} from './constants/weather';
import {spotify} from './constants/spotify';
import {metrics} from './constants/metrics';
import {information} from './constants/information';

import { errorsInterface } from '../interfaces/errors';


export const _errors:errorsInterface = {
    login: login,
    codes: codes,
    offline: offline,
    weather: weather,
    spotify: spotify,
    metrics: metrics,
    information: information
};