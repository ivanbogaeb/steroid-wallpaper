import { icons } from "./functions/icons";
import { current } from "./functions/current";
import { cityCode } from "./functions/cityCode";
import { forecast } from "./functions/forecast";

import { settings } from "../../settings/settings";
import { timerReset } from "./functions/timerReset";
import { setForecastDays } from "./functions/setForecastDays";

export const weather = {
    city: async () => {
        return await cityCode();
    },
    current: async () => {
        return await current();
    },
    forecast: async () => {
        return await forecast();
    },
    icons: () => {
        return icons;
    },
    settings: {
        setForecastDays: (days: number) => {
            return setForecastDays(days);
        },
        timerReset: () => {
            return timerReset();
        },
        active: settings.weather.active,
        current: settings.weather.active,
        forecast: settings.weather.active,
        waitingTime: {
            current: settings.weather.waitingTime.current,
            forecast: settings.weather.waitingTime.forecast,
        },
    },
};


// import { spotifyInterface } from '../../interfaces/spotify';

// import { cover } from './functions/cover';
// import { access } from './functions/access';
// import { clearCache } from './functions/clearCache';
// import { playback } from './functions/playback';

// import { settings } from '../../settings/settings';

// export const spotify:spotifyInterface = {
//     cover: async () => {
//         return await cover();
//     },
//     access: async () => {
//         return await access();
//     },
//     clearCache: () => {
//         return clearCache();
//     },
//     playback: async () => {
//         return await playback();
//     },
//     settings: settings.spotify,
// };


/*
weather: {
        convention: (convention) => {
            
        },
        setForecastDays: (days) => {
            
        },
        timerReset: () => {
            
        },
        errorHandler: (status) => {
            
        },
        cityCode: async () => {
            
        },
        current: async () => {
            
        },
        forecast: async () => {
            
        },
        icons: {
            
        },
    },
}



*/