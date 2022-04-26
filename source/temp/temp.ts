import { tempInterface } from "../interfaces/temp";

export const _temp:tempInterface = {
    user: {
        loggedIn: false,
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
            songChanged: false,
        },
        lastRequest: 0,
        is_ad_playing: false,
        processing_cover: false,
    }
};