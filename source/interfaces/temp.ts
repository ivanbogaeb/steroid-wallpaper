export interface tempInterface {
    user: {
        loggedIn: boolean,
    },
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
        lastRequest: number;
        is_ad_playing: boolean;
        processing_cover: boolean;
    }
};