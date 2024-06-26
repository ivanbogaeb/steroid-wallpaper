import { _temp } from "../../../temp/temp";

export async function cover():Promise<string> {
    let data = await fetch(_temp.spotify.song.cover.url);
    let blob = await data.blob();
    let reader = new FileReader();
    return new Promise((resolve: any) => {
        try {
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                resolve(reader.result);
            };
        } catch (error) {
            return "";
        };
    });
};