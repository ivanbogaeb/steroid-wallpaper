import { settingsInterface } from "../interfaces/settings";

export const settings:settingsInterface = {
    spotify: {
        active: true,
        interval: 1000,
        progress: true,
        requestDelay: 2000,
        create_cover: true,
        process_timeStamp: true,
    },
    weather: {
        active: true,
        current: true,
        forecast: true,
        waitingTime: {
            current: 3600000, // One hour
            forecast: 14400000, // Four hours
        }
    },
    _spotify: {
        active: false,
    },
    _weather: {
        active: false,
        current: false,
        forecast: false,
    },
}