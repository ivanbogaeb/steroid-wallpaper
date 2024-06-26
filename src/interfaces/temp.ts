type IActiveFunction = {
    active: boolean,
    callbackFn: Function
};

interface IOnChange {
    notes: IActiveFunction,
    spotify: IActiveFunction,
    weather: IActiveFunction,
    schedule: IActiveFunction,
    [key: string]: any;
};

export interface tempInterface {
    user: {
        email: string,
        token: string,
        loggedIn: boolean,
        updated: number,
    },
    update: {
        user: boolean,
        weather: boolean,
        spotify: boolean,
        notes: boolean,
        schedule: boolean,
        [key: string]: any;
    },
    change: {
        controller: NodeJS.Timeout,
        functions: IOnChange
    }
    spotify: {
        song: {
            name: string;
            album: string;
            artist: string;
            play: boolean;
            cover: {
                url: string;
                base64: string;
            };
            duration: {
                ms: number;
                time: string;
            };
            progress: {
                ms: number;
                time: string;
            };
            songChanged: boolean;
        };
        stop: boolean,
        lastRequest: number;
        requestFlag: boolean;
        is_ad_playing: boolean;
        processing_cover: boolean;
    }
};