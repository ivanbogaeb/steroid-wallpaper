import { _temp } from "../../../../../temp/temp";
import getChanges from "./get";

const controlChanges = (active: boolean) => {

    const callbackFn = async () => {
        try {
            await getChanges();
            let controllers = Object.keys(_temp.change.functions);
            controllers.forEach(feature => {
                if (_temp.change.functions[feature].active && _temp.update[feature]){
                    _temp.change.functions[feature].callbackFn();
                };
            });
        } catch (error) {
            console.log(error);
        }
    };

    if (active){
        _temp.change.controller = setInterval(callbackFn, 10000);
    } else {
        try {
            clearInterval(_temp.change.controller);
        } catch {
            console.log("Controller already turned off");
        }
    }


};

export default controlChanges;