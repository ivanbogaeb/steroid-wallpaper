import { city } from "./functions/city";
import { current } from "./functions/current";
import { forecast } from "./functions/forecast";

import { icons } from "./functions/icons";

import { settings } from "../../settings/settings";
import { timerReset } from "./functions/timerReset";


export const weather = {
    city: async () => {
        return await city();
    },
    current: async () => {
        return await current();
    },
    forecast: async () => {
        return await forecast();
    },
    icons: icons,
    timerReset: timerReset,
    settings: settings.weather
};