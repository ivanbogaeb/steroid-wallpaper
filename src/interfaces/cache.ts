import IUser from './cache/IUser';
import INotes from './cache/INotes';
import IWeather from './cache/IWeather';
import ISpotify from './cache/ISpotify';
import ISchedule from './cache/ISchedule';

export interface cacheInterface {
    user: IUser;
    notes: INotes,
    weather: IWeather;
    spotify: ISpotify;
    schedule: ISchedule,
};