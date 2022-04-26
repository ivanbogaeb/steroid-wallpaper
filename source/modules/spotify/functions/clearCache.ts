import { _temp } from "../../../temp/temp";

export function clearCache():void {
    let {song} = _temp.spotify;
    song = {
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
    };
};