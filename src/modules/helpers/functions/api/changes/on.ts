import { _temp } from "../../../../../temp/temp";
import { _cache } from "../../../../../cache/cache";

const onChange = (action: "listen" | "remove", feature: "notes" | "spotify" | "weather" | "schedule", callbackFn:Function, repeat:boolean = true) => {

    let featureList = ["notes", "spotify", "weather", "schedule"];

    if (featureList.includes(feature)){

        if (action === "remove"){
            _temp.change.functions[feature] = {
                active: false,
                callbackFn: () => {}
            };
        };

        if (action === "listen"){
            _temp.change.functions[feature] = {
                active: true,
                callbackFn: () => {
                    if (_temp.update[feature]){
                        _temp.update[feature] = repeat;
                        return callbackFn(_cache[feature]);
                    }
                }
            };
        };
        
    };
    
};

export default onChange;