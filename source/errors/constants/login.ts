import { loginInterface } from "../../interfaces/errors/loginErrorInterface";

export const login:loginInterface = {
    noLogin: "You must login first in order to use Steroid's functions.",
    noAuth: "No authentication credentials were found.",
    cooldown: "Too many login attempts, come back in a few minutes.",
    unauthorized: "Your Username or Wallpaper Token might be incorrent, please check them on your Dashboard and restart your wallpaper."
};