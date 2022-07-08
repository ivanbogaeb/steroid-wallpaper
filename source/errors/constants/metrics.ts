import { metricsInterface } from "../../interfaces/errors/metricsErrorInterface";

export const metrics:metricsInterface = {
    badRequest: "Requests available are: '/cpu', '/gpu', '/memory', '/network' and '/filesystem'",
    serviceUnavailable: "Seems like Steroid App is closed!"
};