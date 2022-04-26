import { _temp } from "../../../temp/temp";
import { settings } from "../../../settings/settings";

import { cover } from "./cover";
import { progress } from "./progress";
import { timeStamp } from "./timeStamp";
import { clearCache } from "./clearCache";

export async function processPlayback(res: any):Promise<object>{
    if (settings.spotify.active){
        let data = await res.json();
        if (data.currently_playing_type === "track"){
            _temp.spotify.is_ad_playing === true ? _temp.spotify.is_ad_playing = false : null;
            data.is_playing ? _temp.spotify.song.play = true : _temp.spotify.song.play = false;
            if (_temp.spotify.song.name != data.item.name){ // If the name of the song changed
                _temp.spotify.song.name = data.item.name; // Store new name
                _temp.spotify.song.album = data.item.album.name; // Store new album
                _temp.spotify.song.artist = data.item.artists[0].name; // Store new artist
                _temp.spotify.song.cover.url = data.item.album.images[1].url; // Store album cover url
                _temp.spotify.song.songChanged = true;
                if (settings.spotify.create_cover){
                    _temp.spotify.song.cover.base64 = String(await cover());
                } else {
                    _temp.spotify.song.cover.base64 = "";
                };
                if (settings.spotify.progress){
                    _temp.spotify.song.progress.ms = data.progress_ms;
                    _temp.spotify.song.duration.ms = data.item.duration_ms;
                    if (settings.spotify.process_timeStamp){
                        _temp.spotify.song.progress.time = timeStamp(data.progress_ms);
                        _temp.spotify.song.duration.time = timeStamp(data.item.duration_ms);
                    };
                } else {
                    _temp.spotify.song.progress.ms = 0;
                    _temp.spotify.song.duration.ms = data.item.duration_ms;
                    _temp.spotify.song.progress.time = "0:00";
                    if (settings.spotify.process_timeStamp){ // Check the output format
                        _temp.spotify.song.duration.time = timeStamp(data.item.duration_ms);
                    } else {
                        _temp.spotify.song.duration.time = "0:00";
                    };
                };
            } else { // If it is the same song, then just update the progress
                _temp.spotify.song.songChanged = false;
                return progress(data.progress_ms);
            };
            if (_temp.spotify.song.name !== null){
                return _temp.spotify.song;
            };
        } else {
            _temp.spotify.is_ad_playing = true;
        }
    };
    clearCache();
    return {stop: true};
};