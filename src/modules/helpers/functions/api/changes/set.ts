import { _temp } from "../../../../../temp/temp";

const setChanges = (changes:Array<any>) => {
    for (let i = 0; i < changes.length; i++){
        switch(changes[i].name){
            case "notes":
                _temp.update.notes = true;
                break;
            case "spotify":
                _temp.update.spotify = true;
                break;
            case "weather":
                _temp.update.weather = true;
                break;
            case "schedule":
                _temp.update.schedule = true;
                break;
            default:
                throw `Change ${changes[i]} not processed, steroid-wallpaper doesn't count a way to track this feature yet.`;
        };
        return true;
    };

};

export default setChanges;