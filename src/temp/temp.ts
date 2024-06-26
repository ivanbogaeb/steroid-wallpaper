import { tempInterface } from "../interfaces/temp";

export const _temp:tempInterface = {
    user: {
        email: "",
        token: "",
        loggedIn: false,
        updated: 0,
    },
    update: {
        user: false,
        notes: false,
        weather: false,
        spotify: false,
        schedule: false,
    },
    change: {
        functions: {
            notes: {
                active: false,
                callbackFn: () => {},
            },
            spotify: {
                active: false,
                callbackFn: () => {},
            },
            weather: {
                active: false,
                callbackFn: () => {},
            },
            schedule: {
                active: false,
                callbackFn: () => {},
            },
        },
        controller: setTimeout(() => {}, 150),
    },
    spotify: {
        song: {
            name: "",
            album: "",
            artist: "",
            play: false,
            cover: {
                url: "",
                base64: ""
            },
            duration: {
                ms: 0,
                time: "0:00"
            },
            progress: {
                ms: 0,
                time: "0:00"
            },
            songChanged: true,
        },
        stop: false,
        lastRequest: 0,
        requestFlag: false,
        is_ad_playing: false,
        processing_cover: false,
    }
};