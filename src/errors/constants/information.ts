import { informationInterface } from "../../interfaces/errors/informationErrorInterface";

export const information:informationInterface = {
    badRequest: "Requests available are: '/os', '/cpu', '/gpu', '/usb', '/wifi', '/audio', '/memory', '/system', '/network', '/printer', '/battery', '/bluetooth', '/filesystem' and '/motherboard'",
    serviceUnavailable: "Seems like Steroid App is closed!"
};