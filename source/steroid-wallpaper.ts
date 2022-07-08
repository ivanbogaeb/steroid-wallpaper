import { initialize } from './modules/initialize';
import { helpers } from './modules/helpers';
import { spotify } from './modules/spotify';
import { weather } from './modules/weather';

import { metrics } from './modules/metrics';
import { information } from './modules/information';

import { execute } from './modules/execute';

declare global {
    interface Window {
        Steroid: (this: any) => void;
    }
};

window.Steroid = function Steroid(this: any){
    this.helpers = helpers;
    this.initialize = initialize;
    this.spotify = spotify;
    this.weather = weather;
    this.metrics = metrics;
    this.information = information;
    this.execute = execute;
};