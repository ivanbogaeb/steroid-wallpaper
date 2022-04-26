import { initialize } from './modules/initialize';
import { helpers } from './modules/helpers/helpers';
import { spotify } from './modules/spotify/spotify';
import {weather} from './modules/weather/weather';

declare global {
    interface Window {
        Steroid: (this: any) => void;
    }
};

window.Steroid = function Steroid(this: any){
    // Public functions
    this.helpers = helpers;
    this.initialize = initialize;
    this.spotify = spotify;
    this.weather = weather;
};