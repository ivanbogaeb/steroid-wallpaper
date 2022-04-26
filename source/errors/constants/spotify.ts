import { spotifyInterface } from "../../interfaces/errors/spotifyErrorInterface";

export const spotify: spotifyInterface = {
    activate: "You must activate this Spotify function before executing it.",
    issue: "Seems like Spotify is not working today, we hope it comes back in a few minutes.",
    refresh: "Ooops, something went wrong with Spotify! Try reconnecting your account with Steroid.",
    noSong: "Nothing to play for now",
    rate: "You have reached the rate limit for Spotify requests per minute, please slow them down.",
}