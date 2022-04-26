export function timeStamp(milliseconds: number){
    let minutes = Math.floor(milliseconds / 60000);
    let seconds = Number(((milliseconds % 60000) / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
};