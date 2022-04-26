import { userInterface} from './cache/userCacheInterface';
import { weatherInterface } from './cache/weatherCacheInterface';
import { spotifyInterface } from './cache/spotifyCacheInterface';

export interface cacheInterface {
    user: userInterface;
    weather: weatherInterface;
    spotify: spotifyInterface;
};