import { settings } from "../../../settings/settings";
import { _temp } from "../../../temp/temp";

import { timeStamp } from "./timeStamp";

export function progress(ms: number):object {
    if (settings.spotify.progress){
        if (_temp.spotify.song.progress.ms + settings.spotify.interval < _temp.spotify.song.duration.ms){ // Prevent progress going beyond the song duration
            if (ms !== 0){
                _temp.spotify.song.progress.ms = ms;
            } else {
                _temp.spotify.song.progress.ms += settings.spotify.interval;
            }
            if (settings.spotify.process_timeStamp){
                _temp.spotify.song.progress.time = timeStamp(_temp.spotify.song.progress.ms);
            };
        };
    };

    if (_temp.spotify.song.songChanged === true){
        _temp.spotify.song.songChanged = false;
    }

    return _temp.spotify.song;
};