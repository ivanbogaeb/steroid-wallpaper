import { _temp } from '../../temp/temp';

import { access } from './functions/access';
import { playback } from './functions/playback';
import { settings } from '../../settings/settings';

export const spotify = {
    access: async () => {
        return await access();
    },
    playback: async () => {
        return await playback();
    },
    song: () => {
        return _temp.spotify.song
    },
    settings: settings.spotify
};