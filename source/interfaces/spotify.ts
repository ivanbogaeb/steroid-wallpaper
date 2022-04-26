export interface spotifyInterface {
    access: () => Promise<object>;
    playback: () => Promise<object>;
    settings: object;
    song: object;
};

export interface accessInterface {
    success: boolean;
    error: string;
    code: number;
}