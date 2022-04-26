export interface settingsInterface {
    spotify: {
        active: boolean;
        interval: number;
        progress: boolean;
        requestDelay: number;
        create_cover: boolean;
        process_timeStamp: boolean;
    };
    weather: {
        active: boolean;
        current: boolean;
        forecast: boolean;
        forecast_days: number;
        waitingTime: {
            current: number;
            forecast: number;
        }
    };
    _spotify: {
        active: boolean;
    };
    _weather: {
        active: boolean;
        current: boolean;
        forecast: boolean;
    };
}