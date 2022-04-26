import { loginInterface } from "./errors/loginErrorInterface";
import { codesInterface } from "./errors/codesErrorInterface";
import { offlineInterface } from "./errors/offlineErrorInterface";
import { weatherInterface } from "./errors/weatherErrorInterface";
import { spotifyInterface } from "./errors/spotifyErrorInterface";

export interface errorsInterface {
    login: loginInterface;
    codes: codesInterface;
    offline: offlineInterface;
    weather: weatherInterface;
    spotify: spotifyInterface;
}