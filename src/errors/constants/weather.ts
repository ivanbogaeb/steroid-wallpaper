import { weatherInterface } from "../../interfaces/errors/weatherErrorInterface";

export const weather:weatherInterface = {
    activate: "You must activate Weather functions in your Steroid settings.",
    activateFunction: "You must activate this weather function before executing it.",
    login: "You must login with Steroid to receive weather details.",
    apiKeyUnauthorized: "Your AccuWeather API key is not valid, please create a new one following the steps mentioned on Steroid's guide.",
    locationNotFound: "Your location hasn't been found by AccuWeather, please try to search it on their webpage first for better accuracy.",
    unavailable: "Seems like AccuWeather is currently unavailable, please try again later."
};