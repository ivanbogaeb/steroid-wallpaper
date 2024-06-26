import notes from './modules/notes/notes';
import { helpers } from './modules/helpers';
import { spotify } from './modules/spotify';
import { weather } from './modules/weather';
import schedule from './modules/schedule/schedule';

import { initialize } from './modules/initialize';

import { metrics } from './modules/metrics';
import { information } from './modules/information';

import { execute } from './modules/execute';
import { getStatus } from './modules/helpers/functions/getStatus';

declare global {
    interface Window {
        Steroid: (this: any) => void;
    }
};

window.Steroid = function Steroid(this: any){
    this.cache = helpers;
    this.initialize = initialize;
    this.notes = notes;
    this.schedule = schedule;
    this.spotify = spotify;
    this.weather = weather;
    this.metrics = metrics;
    this.information = information;
    this.execute = execute;
    this.keepalive = getStatus;
};