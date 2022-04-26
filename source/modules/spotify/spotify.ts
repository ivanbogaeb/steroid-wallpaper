import { _temp } from '../../temp/temp';

import { access } from './functions/access';
import { playback } from './functions/playback';
import { settings } from '../../settings/settings';

import { spotifyInterface } from '../../interfaces/spotify';

export const spotify:spotifyInterface = {
    access: async () => {
        return await access();
    },
    playback: async () => {
        return await playback();
    },
    settings: settings.spotify,
    song: () => {
        return _temp.spotify.song
    }
};